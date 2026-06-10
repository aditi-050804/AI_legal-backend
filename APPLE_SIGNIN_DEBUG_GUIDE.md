# Apple Sign In Debugging Guide for Mac & iPhone

## What Was Fixed

### 1. ✅ Enhanced Logging
- Added platform detection (iOS/macOS/Web)
- Added detailed debug logs at GET `/api/auth/apple` endpoint
- Added detailed debug logs at POST `/api/auth/apple/callback` endpoint
- Improved error messages with platform information
- All logs now use consistent `[APPLE SIGNIN]` prefix for easier searching

### 2. ✅ Added Apple App Site Association
- Created `.well-known/apple-app-site-association` file
- Updated server.js to serve this file at `/.well-known/apple-app-site-association`
- This enables Sign in with Apple on iOS/Mac browsers

### 3. ✅ Improved Error Handling
- Better error messages indicating which environment variable is missing
- Platform-specific error messages in redirects
- Detailed stack traces in server logs

## How to Verify the Fix

### Step 1: Check Server Logs
When you try Apple Sign In, look for these log messages in your terminal:

```
[APPLE SIGNIN] Platform: iOS/macOS/Web
[APPLE SIGNIN] GET /apple initiated from [platform]
[APPLE SIGNIN] Callback received from [platform]
[APPLE SIGNIN] Parsing: Code=✓, ID Token=✓, User=✓
```

### Step 2: Verify Environment Variables
Run this command to check your Apple credentials are loaded:
```bash
npm run dev
# Look for:
# [APPLE SIGNIN] Environment - ClientID: ✓, TeamID: ✓, KeyID: ✓, PrivateKey: ✓
```

### Step 3: Test on Different Platforms

**Web Browser (Desktop/Laptop):**
1. Go to https://aisa24.com/signup
2. Click "Apple ID" button
3. Check logs for: `[APPLE SIGNIN] Platform: Web`

**iPhone/iPad:**
1. Open Safari
2. Go to https://aisa24.com/signup
3. Click "Apple ID" button
4. Check logs for: `[APPLE SIGNIN] Platform: iOS`
5. If using private relay, look for: `email: relay-email@privaterelay.appleid.com`

**Mac:**
1. Open Safari
2. Go to https://aisa24.com/signup
3. Click "Apple ID" button
4. Check logs for: `[APPLE SIGNIN] Platform: macOS`

## Common Issues & Solutions

### Issue 1: "APPLE_CLIENT_ID is missing"
**Problem:** Environment variable not loaded
**Solution:**
```bash
# Verify .env file exists
cat .env | grep APPLE_CLIENT_ID

# If missing, add to .env:
APPLE_CLIENT_ID=com.aisa24.login
APPLE_TEAM_ID=3MWP4W4XQV
APPLE_KEY_ID=N9366H7UY2
APPLE_PRIVATE_KEY=AuthKey_N9366H7UY2.p8
```

### Issue 2: "Failed to read key file"
**Problem:** AuthKey file not found or in wrong location
**Solution:**
```bash
# Check key file exists
ls -la AuthKey_N9366H7UY2.p8

# If missing, create it or copy from your Apple Developer account
# The file should be at: Aisa_backend_beta/AuthKey_N9366H7UY2.p8
```

### Issue 3: "No ID Token received"
**Problem:** Apple not returning ID token in callback
**Potential Causes:**
- Redirect URI not registered in Apple Developer Console
- Incorrect Bundle ID in backend config
- User denied permission to share name/email

**Solution:**
1. Go to [Apple Developer Console](https://developer.apple.com/account/)
2. Go to Identifiers → App IDs → Select "com.aisa24.login"
3. Check "Sign in with Apple" is enabled
4. Go to Configure → Web Authentication Configuration
5. Verify redirect URI is exactly: `https://aisa24.com/api/auth/apple/callback`
6. Add domain: `aisa24.com`
7. Save and wait 5-10 minutes for changes to propagate

### Issue 4: iOS Private Relay Email
**Problem:** User's email is `relay-email@privaterelay.appleid.com`
**Note:** This is normal! Apple's privacy feature. The backend will create a user with this email, and the user can update their email in settings.

### Issue 5: Form POST not being received
**Problem:** Logs show empty body
**Solution:** Verify server.js has this middleware (it should already):
```javascript
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
```

## Checking Apple App Site Association

Verify the `.well-known/apple-app-site-association` file is served correctly:

```bash
# Check if file exists
ls -la public/.well-known/apple-app-site-association

# Test it can be accessed
curl -i https://aisa24.com/.well-known/apple-app-site-association
# Should return: 200 OK with JSON content
```

## Real-Time Debugging in Production

### Monitor Logs
```bash
# Watch logs in real-time
npm run dev | grep "APPLE SIGNIN"

# Or in production (Google Cloud Run)
gcloud logging read "resource.type=cloud_run_revision AND severity>=DEBUG" --limit 50 --format json | grep -i apple
```

### Debug Frontend
In browser console (Mac/iOS Safari):
```javascript
// Check what URL is being called
console.log(document.querySelector('[onclick*="appleLogin"]'))
```

## Next Steps If Still Not Working

1. **Check browser console** on Mac/iPhone for any JavaScript errors
2. **Enable Safari Web Inspector** on iPhone to debug
3. **Check Chrome DevTools** Network tab to see the redirect URL
4. **Verify CORS** - The redirect should be from apple.com to aisa24.com
5. **Test with staging** - Use `VITE_AISA_BACKEND_API` environment variable to test against staging
6. **Contact Apple Support** - If redirect URI issues persist

## Important Notes

- ✅ All platforms share the same endpoint: `/api/auth/apple`
- ✅ Both form_post and query response modes are supported
- ✅ Private emails are supported (relay-email@privaterelay.appleid.com)
- ✅ Name/Email must be requested in `scope` parameter
- ⚠️ Changes in Apple Developer Console take 5-10 minutes to propagate
- ⚠️ Must use HTTPS in production (Apple requirement)
