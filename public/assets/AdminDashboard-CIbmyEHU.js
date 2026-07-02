const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/KnowledgeUpload-DXLSKL2J.js","assets/index-BusjsCem.js","assets/index-CtjEh6TV.css","assets/KnowledgeManagement-Y1xpw9Cz.js"])))=>i.map(i=>d[i]);
import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, X, v as Search, R as RefreshCw, u as Eye, A as AnimatePresence, w as axios, x as apis, z as zt, y as useLanguage, B as useNavigate, q as getUserData, H as ChartColumn, I as Users, M as MessageSquare, J as CreditCard, l as Shield, F as FileText, K as Headphones, N as BookOpen, S as Settings, O as logo, P as ArrowLeft, Q as Activity, V as DollarSign, W as Save, a as apiService, T as Trash2, Y as Plus, _ as CirclePlus, $ as React, C as CircleAlert, a0 as Pen, b as Clock, D as DeleteConfirmModal, n as TriangleAlert, Z as Zap, e as ChevronRight, a1 as TrendingUp, L as Layers, a2 as Check, a3 as Mail, a4 as ChevronLeft, a5 as Bot, a6 as User, a7 as __vitePreload, a8 as API } from "./index-BusjsCem.js";
import { C as ChartPie, T as TrendingDown } from "./trending-down-BfmPmLY-.js";
import { F as FileUp } from "./file-up-BeXRV0-3.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
];
const Ban = createLucideIcon("Ban", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("ChartNoAxesColumn", __iconNode);
const AdminHelpDesk = ({ isOpen, onClose, isEmbedded = false }) => {
  const [tickets, setTickets] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedTicket, setSelectedTicket] = reactExports.useState(null);
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const ticketsRes = await axios.get(`${apis.support}/tickets`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("[ADMIN HELPDESK] Tickets fetched:", ticketsRes.data.tickets);
      setTickets(ticketsRes.data.tickets || []);
    } catch (error) {
      console.error("[ADMIN] Error fetching tickets:", error);
      if (error.response) {
        console.error("[ADMIN] Error details:", error.response.data);
      }
      zt.error("Failed to fetch support tickets");
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (isOpen || isEmbedded) {
      fetchTickets();
      const interval = setInterval(fetchTickets, 1e4);
      return () => clearInterval(interval);
    }
  }, [isOpen, isEmbedded]);
  const filteredTickets = (tickets || []).filter((ticket) => {
    var _a, _b, _c;
    const matchesSearch = ((_a = ticket == null ? void 0 : ticket.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = ticket == null ? void 0 : ticket.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase())) || ((_c = ticket == null ? void 0 : ticket.message) == null ? void 0 : _c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "resolved":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in_progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };
  if (!isOpen && !isEmbedded) return null;
  const modalClasses = "bg-background border border-border rounded-2xl w-[95vw] max-w-7xl h-[90vh] flex flex-col shadow-2xl overflow-hidden";
  const embeddedClasses = "bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl w-full h-[700px] flex flex-col shadow-xl overflow-hidden backdrop-blur-md";
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: isEmbedded ? {} : { opacity: 0, scale: 0.95 },
      animate: isEmbedded ? {} : { opacity: 1, scale: 1 },
      exit: isEmbedded ? {} : { opacity: 0, scale: 0.95 },
      className: isEmbedded ? embeddedClasses : modalClasses,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-maintext flex items-center gap-2", children: "🎧 Admin Help Desk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-subtext mt-1", children: "Manage user support queries" })
          ] }),
          !isEmbedded && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "p-2 hover:bg-surface rounded-lg transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-subtext" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subtext" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search tickets...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-maintext placeholder-subtext focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: fetchTickets,
              className: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                "Refresh"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" }) }) : filteredTickets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-subtext", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "No tickets found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: "Try adjusting your filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: filteredTickets.map((ticket) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-surface border border-border rounded-xl p-4 hover:border-primary/50 transition-colors cursor-pointer",
            onClick: () => setSelectedTicket(ticket),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-maintext", children: ticket.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full border ${getStatusColor(ticket.status)}`, children: ticket.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20", children: ticket.issueType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-subtext mb-2", children: ticket.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-maintext line-clamp-2", children: ticket.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: new Date(ticket.createdAt).toLocaleDateString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedTicket(ticket);
                    },
                    className: "p-2 hover:bg-primary/10 rounded-lg transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 text-primary" })
                  }
                ) })
              ] })
            ] })
          },
          ticket._id
        )) }) })
      ]
    }
  );
  const ticketModal = /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedTicket && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      className: "bg-background border border-border rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl m-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-maintext", children: "Ticket Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSelectedTicket(null),
              className: "p-2 hover:bg-surface rounded-lg transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-subtext" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-medium", children: selectedTicket.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: selectedTicket.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Issue Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: selectedTicket.issueType })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext bg-surface p-4 rounded-lg border border-border whitespace-pre-wrap", children: selectedTicket.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm px-3 py-1 rounded-full border ${getStatusColor(selectedTicket.status)}`, children: selectedTicket.status }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Created" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: new Date(selectedTicket.createdAt).toLocaleString() })
            ] })
          ] })
        ] })
      ] })
    }
  ) }) });
  if (isEmbedded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full relative", children: [
      content,
      ticketModal
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: [
    content,
    ticketModal
  ] });
};
const KnowledgeUpload = React.lazy(() => __vitePreload(() => import("./KnowledgeUpload-DXLSKL2J.js"), true ? __vite__mapDeps([0,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const KnowledgeManagement = React.lazy(() => __vitePreload(() => import("./KnowledgeManagement-Y1xpw9Cz.js"), true ? __vite__mapDeps([3,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const ADMIN_EMAIL = "admin@uwo24.com";
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" }) });
const TabButton = ({ active, icon: Icon, label, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    onClick,
    title: label,
    className: `flex items-center gap-2 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${active ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-subtext hover:bg-white/20 dark:hover:bg-white/10 hover:text-maintext"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: label })
    ]
  }
);
const StatCard = ({ icon: Icon, label, value, color = "primary", trend }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-primary/30 transition-all",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 text-${color}` }) }),
          trend && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg", children: trend })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: label })
      ] })
    ]
  }
);
const SectionCard = ({ title, children, action }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext text-lg", children: title }),
    action
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children })
] });
const OverviewTab = () => {
  const { t } = useLanguage();
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const fetchStats = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const data = await apiService.getAdminOverviewStats();
      setStats(data.stats || data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  reactExports.useEffect(() => {
    fetchStats();
    const interval = setInterval(() => fetchStats(), 1e4);
    return () => clearInterval(interval);
  }, []);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm", children: t("loadingRealTimeOverview") })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold text-subtext uppercase tracking-widest flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
        " ",
        t("livePlatformActivity")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => fetchStats(true),
          disabled: refreshing,
          className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all disabled:opacity-50",
          title: "Manual Refresh",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${refreshing ? "animate-spin" : ""}` })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Users, label: t("totalUsers"), value: (stats == null ? void 0 : stats.totalUsers) ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Activity, label: t("activeSubscriptions"), value: (stats == null ? void 0 : stats.activeSubscriptions) ?? 0, color: "emerald-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: DollarSign, label: t("totalRevenue"), value: `₹${(stats == null ? void 0 : stats.totalRevenue) ?? 0}`, color: "amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Headphones, label: t("support"), value: (stats == null ? void 0 : stats.pendingTickets) ?? 0, color: "primary", trend: (stats == null ? void 0 : stats.pendingTickets) > 0 ? "Action Required" : "All Clear" })
    ] }),
    (stats == null ? void 0 : stats.toolUsage) && stats.toolUsage.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: t("toolUsageAnalytics"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stats.toolUsage.map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-white/20 dark:bg-white/5 rounded-xl border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-maintext text-sm", children: tool._id || "Unknown" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 text-xs text-subtext", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
        tool.count,
        " uses"
      ] }) })
    ] }, i)) }) })
  ] });
};
const UsersTab = () => {
  const { t } = useLanguage();
  const [users, setUsers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [upgradeData, setUpgradeData] = reactExports.useState({ planName: "", expiryDate: "" });
  const [deleteModal, setDeleteModal] = reactExports.useState({ isOpen: false, userId: null });
  reactExports.useEffect(() => {
    fetchUsers();
    fetchPlans();
  }, []);
  const [availablePlans, setAvailablePlans] = reactExports.useState([]);
  const fetchPlans = async () => {
    try {
      const data = await apiService.getPlans();
      setAvailablePlans(Array.isArray(data) ? data : data.plans || []);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    }
  };
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await apiService.getAllUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleBlockToggle = async (userId, currentStatus) => {
    try {
      await apiService.toggleBlockUser(userId, !currentStatus);
      zt.success(currentStatus ? "User unblocked" : "User blocked");
      fetchUsers();
    } catch (err) {
      zt.error("Failed to update user status");
    }
  };
  const handleDeleteUser = async () => {
    if (!deleteModal.userId) return;
    try {
      await apiService.deleteUser(deleteModal.userId);
      zt.success("User deleted");
      setDeleteModal({ isOpen: false, userId: null });
      fetchUsers();
    } catch (err) {
      zt.error("Failed to delete user");
      setDeleteModal({ isOpen: false, userId: null });
    }
  };
  const [isUpgrading, setIsUpgrading] = reactExports.useState(null);
  const handleManualUpgrade = async (userId) => {
    var _a;
    if (!upgradeData.planName) {
      zt.error("Please select a plan");
      return;
    }
    setIsUpgrading(userId);
    try {
      const response = await fetch(`${API}/admin/manual-upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${(_a = getUserData()) == null ? void 0 : _a.token}`
        },
        body: JSON.stringify({ userId, ...upgradeData })
      });
      const data = await response.json();
      if (data.success) {
        zt.success("Plan upgraded successfully");
        setUpgradeData({ planName: "", expiryDate: "" });
        fetchUsers();
      } else {
        zt.error(data.message || "Failed to upgrade plan");
      }
    } catch (err) {
      console.error("Upgrade error:", err);
      zt.error("Failed to upgrade plan");
    } finally {
      setIsUpgrading(null);
    }
  };
  const filteredUsers = users.filter(
    (u) => {
      var _a, _b;
      return ((_a = u.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = u.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase()));
    }
  );
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: t("searchUsersPlaceholder"),
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "w-full bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/50 transition-all placeholder:text-subtext/50 text-maintext"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      filteredUsers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext py-8 text-sm", children: t("noUsersFound") }),
      filteredUsers.map((user) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layout: true,
            className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-4 hover:border-primary/20 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start sm:items-center justify-between flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-white/10 shrink-0", children: user.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: user.name, className: "w-full h-full object-cover", onError: (e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/account.png";
                  } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: ((_b = (_a = user.name) == null ? void 0 : _a.charAt(0)) == null ? void 0 : _b.toUpperCase()) || "U" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm truncate", children: user.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext truncate", children: user.email })
                  ] }),
                  user.isBlocked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-red-500/10 text-red-500 text-[10px] font-bold uppercase", children: t("block") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${((_c = user.planName) == null ? void 0 : _c.toLowerCase().includes("pro")) ? "bg-amber-500/10 text-amber-500" : ((_d = user.planName) == null ? void 0 : _d.toLowerCase().includes("founder")) ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"}`, children: user.planName || user.role || "Free Plan" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setSelectedUser(selectedUser === (user._id || user.id) ? null : user._id || user.id),
                      className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all",
                      title: t("manage"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleBlockToggle(user._id || user.id, user.isBlocked),
                      className: `p-2 rounded-lg transition-all ${user.isBlocked ? "hover:bg-green-500/10 text-green-500" : "hover:bg-amber-500/10 text-amber-500"}`,
                      title: user.isBlocked ? t("unblock") : t("block"),
                      children: user.isBlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setDeleteModal({ isOpen: true, userId: user._id || user.id }),
                      className: "p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-all",
                      title: t("delete"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              selectedUser === (user._id || user.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden border-t border-white/10 mt-3 pt-3",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        className: "flex-1 min-w-[120px] bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-2 py-1.5 text-xs text-maintext",
                        value: upgradeData.planName,
                        onChange: (e) => setUpgradeData({ ...upgradeData, planName: e.target.value }),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("selectPlan") }),
                          availablePlans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.planName, children: p.planName }, p._id))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        className: "flex-1 min-w-[120px] bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-2 py-1.5 text-xs text-maintext",
                        value: upgradeData.expiryDate,
                        onChange: (e) => setUpgradeData({ ...upgradeData, expiryDate: e.target.value })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleManualUpgrade(user._id || user.id),
                        disabled: isUpgrading === (user._id || user.id),
                        className: "px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all whitespace-nowrap",
                        children: isUpgrading === (user._id || user.id) ? t("loading") : t("upgrade")
                      }
                    )
                  ] })
                }
              )
            ]
          },
          user._id || user.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmModal,
      {
        isOpen: deleteModal.isOpen,
        onClose: () => setDeleteModal({ isOpen: false, userId: null }),
        onConfirm: handleDeleteUser,
        title: t("deleteUserTitle"),
        description: t("deleteUserDesc")
      }
    )
  ] });
};
const formatFeatureString = (feature, plan) => {
  if (!feature || !plan) return feature;
  let result = feature;
  if (/total AI messages/i.test(result) || /total messages/i.test(result) || /AI messages/i.test(result)) {
    if (plan.chatLimit === -1 || plan.chatScope === "unlimited") {
      return "Unlimited AI Chat";
    } else {
      result = result.replace(/\d+/, plan.chatLimit ?? 100);
    }
  }
  if (/months validity/i.test(result) || /month validity/i.test(result) || /days validity/i.test(result)) {
    const months = Math.round((plan.validityDays || 90) / 30);
    result = result.replace(/\d+/, months);
  }
  if (/Images\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.imageLimit ?? 0);
  }
  if (/Carousel\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.carouselLimit ?? 0);
  }
  if (/Videos\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.videoLimit ?? 0);
  }
  return result;
};
const PlansTab = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingPlan, setEditingPlan] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    planId: "",
    planName: "",
    priceMonthly: "",
    priceYearly: "",
    validityDays: "",
    features: ""
  });
  const [deleteModal, setDeleteModal] = reactExports.useState({ isOpen: false, planId: null });
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPlans();
  }, []);
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const data = await apiService.getPlans();
      setPlans(Array.isArray(data) ? data : data.plans || []);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    setSaving(true);
    try {
      const body = {
        planId: form.planId,
        planName: form.planName,
        priceMonthly: Number(form.priceMonthly),
        priceYearly: Number(form.priceYearly),
        validityDays: Number(form.validityDays),
        features: form.features.split(",").map((f) => f.trim()).filter(Boolean)
      };
      let data;
      if (editingPlan) {
        data = await apiService.updatePlan(editingPlan._id, body);
      } else {
        data = await apiService.createPlan(body);
      }
      if (data.success) {
        zt.success(editingPlan ? "Plan updated" : "Plan created");
        resetForm();
        fetchPlans();
      } else {
        zt.error(data.message || "Failed");
      }
    } catch (err) {
      zt.error("Failed to save plan");
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async () => {
    if (!deleteModal.planId) return;
    try {
      await apiService.deletePlan(deleteModal.planId);
      zt.success("Plan deleted");
      setDeleteModal({ isOpen: false, planId: null });
      fetchPlans();
    } catch (err) {
      zt.error("Failed to delete plan");
      setDeleteModal({ isOpen: false, planId: null });
    }
  };
  const startEdit = (plan) => {
    var _a, _b, _c;
    setEditingPlan(plan);
    setForm({
      planId: plan.planId || "",
      planName: plan.planName || "",
      priceMonthly: ((_a = plan.priceMonthly) == null ? void 0 : _a.toString()) || "",
      priceYearly: ((_b = plan.priceYearly) == null ? void 0 : _b.toString()) || "",
      validityDays: ((_c = plan.validityDays) == null ? void 0 : _c.toString()) ?? "90",
      features: (plan.features || []).map((f) => formatFeatureString(f, plan)).join(", ")
    });
    setShowForm(true);
  };
  const resetForm = () => {
    setForm({
      planId: "",
      planName: "",
      priceMonthly: "",
      priceYearly: "",
      validityDays: "",
      features: ""
    });
    setEditingPlan(null);
    setShowForm(false);
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          resetForm();
          setShowForm(!showForm);
        },
        className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New Plan"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext", children: editingPlan ? "Edit Plan" : "Create New Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Plan ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. starter-plan",
                  value: form.planId,
                  onChange: (e) => setForm((p) => ({ ...p, planId: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Plan Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. Starter",
                  value: form.planName,
                  onChange: (e) => setForm((p) => ({ ...p, planName: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Monthly Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 499",
                  type: "number",
                  value: form.priceMonthly,
                  onChange: (e) => setForm((p) => ({ ...p, priceMonthly: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Yearly Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 4990",
                  type: "number",
                  value: form.priceYearly,
                  onChange: (e) => setForm((p) => ({ ...p, priceYearly: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Validity (Days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 30",
                  type: "number",
                  value: form.validityDays,
                  onChange: (e) => setForm((p) => ({ ...p, validityDays: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Features List (Comma-separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "e.g. Unlimited AI Chat, CashFlow Explorer, Web & Deep Search",
                value: form.features,
                onChange: (e) => setForm((p) => ({ ...p, features: e.target.value })),
                className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetForm, className: "px-4 py-2 rounded-xl text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 transition-all", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, className: "px-6 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20", children: editingPlan ? "Update" : "Create" })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:border-primary/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-maintext", children: plan.planName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-black text-primary leading-none", children: [
                "₹",
                plan.priceMonthly,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-subtext font-normal ml-1", children: "/mo" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-subtext", children: [
                "Yearly: ₹",
                plan.priceYearly,
                " (₹",
                Math.round(plan.priceYearly / 12),
                "/mo)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startEdit(plan), className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDeleteModal({ isOpen: true, planId: plan._id }), className: "p-2 rounded-lg hover:bg-red-500/10 text-subtext hover:text-red-500 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-subtext border-t border-white/10 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-primary animate-pulse" }),
            "Validity: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-maintext", children: [
              plan.validityDays,
              " days"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-[10px] opacity-70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5" }),
            "ID: ",
            plan.planId
          ] })
        ] })
      ] }, plan._id)),
      plans.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm col-span-full text-center py-8", children: "No plans created yet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmModal,
      {
        isOpen: deleteModal.isOpen,
        onClose: () => setDeleteModal({ isOpen: false, planId: null }),
        onConfirm: handleDelete,
        title: "Delete Plan?",
        description: "Are you sure you want to delete this plan? This action cannot be undone."
      }
    )
  ] });
};
const ToolLimitTab = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = reactExports.useState([]);
  const [editedPlans, setEditedPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await apiService.getPlans();
        const plansList = Array.isArray(data) ? data : data.plans || [];
        setPlans(plansList);
        setEditedPlans(JSON.parse(JSON.stringify(plansList)));
      } catch (err) {
        console.error("Failed to fetch plans:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);
  const handleValueChange = (planId, field, value) => {
    setEditedPlans((prev) => prev.map((p) => {
      if (p._id === planId) {
        return { ...p, [field]: value };
      }
      return p;
    }));
  };
  const hasUnsavedChanges = JSON.stringify(plans) !== JSON.stringify(editedPlans);
  const handleSaveAll = async () => {
    setSaving(true);
    let successCount = 0;
    let failCount = 0;
    const modified = editedPlans.filter((ep) => {
      const original = plans.find((p) => p._id === ep._id);
      return JSON.stringify(ep) !== JSON.stringify(original);
    });
    for (const plan of modified) {
      try {
        const body = {
          planId: plan.planId,
          planName: plan.planName,
          priceMonthly: Number(plan.priceMonthly),
          priceYearly: Number(plan.priceYearly),
          chatLimit: Number(plan.chatLimit),
          chatScope: plan.chatScope,
          imageLimit: Number(plan.imageLimit),
          carouselLimit: Number(plan.carouselLimit),
          videoLimit: Number(plan.videoLimit),
          editImageAllowed: Boolean(plan.editImageAllowed),
          cashflowAllowed: Boolean(plan.cashflowAllowed),
          validityDays: Number(plan.validityDays),
          aiLegalAllowed: Boolean(plan.aiLegalAllowed),
          aiAdsAllowed: Boolean(plan.aiAdsAllowed),
          voiceGenAllowed: Boolean(plan.voiceGenAllowed),
          webSearchAllowed: Boolean(plan.webSearchAllowed),
          deepSearchAllowed: Boolean(plan.deepSearchAllowed),
          codeWriterAllowed: Boolean(plan.codeWriterAllowed),
          documentConvertAllowed: Boolean(plan.documentConvertAllowed),
          features: plan.features,
          badge: plan.badge,
          isPopular: plan.isPopular,
          isActive: plan.isActive
        };
        const res = await apiService.updatePlan(plan._id, body);
        if (res.success) {
          successCount++;
        } else {
          failCount++;
        }
      } catch (err) {
        console.error(`Failed to update plan ${plan.planName}:`, err);
        failCount++;
      }
    }
    if (successCount > 0) {
      zt.success(`Successfully saved ${successCount} plan limit configuration${successCount > 1 ? "s" : ""}`);
    }
    if (failCount > 0) {
      zt.error(`Failed to save ${failCount} plan configurations`);
    }
    try {
      const data = await apiService.getPlans();
      const freshPlans = Array.isArray(data) ? data : data.plans || [];
      setPlans(freshPlans);
      setEditedPlans(JSON.parse(JSON.stringify(freshPlans)));
    } catch (err) {
      console.error("Failed to reload plans:", err);
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  const services = [
    {
      category: "Plan Core Settings",
      items: [
        {
          name: "AI Chat Scope",
          description: "Chat availability type",
          field: "chatScope",
          type: "select",
          options: [
            { value: "total", label: "Lifetime Cap" },
            { value: "unlimited", label: "Unlimited" }
          ]
        },
        {
          name: "AI Chat Limit",
          description: "Max messages count (-1 for unlimited)",
          field: "chatLimit",
          type: "number"
        },
        {
          name: "Validity (Days)",
          description: "Plan expiration duration",
          field: "validityDays",
          type: "number"
        }
      ]
    },
    {
      category: "BUSINESS",
      items: [
        {
          name: "AI Legal™ Advisor",
          description: "Access to AI Legal documents and toolkit",
          field: "aiLegalAllowed",
          type: "boolean"
        },
        {
          name: "AI Cashflow™",
          description: "Permission to access stock analysis tabs",
          field: "cashflowAllowed",
          type: "boolean"
        },
        {
          name: "AI ADS™ Agent",
          description: "Access to AI Ads and Social Media generation",
          field: "aiAdsAllowed",
          type: "boolean"
        }
      ]
    },
    {
      category: "CREATE",
      items: [
        {
          name: "AI Image Generation",
          description: "Daily image creation limit",
          field: "imageLimit",
          type: "number"
        },
        {
          name: "AI Image Editor",
          description: "Permission to edit/transform images",
          field: "editImageAllowed",
          type: "boolean"
        },
        {
          name: "AI Carousel Generation",
          description: "Daily AIAD carousel limit",
          field: "carouselLimit",
          type: "number"
        },
        {
          name: "AI Video Generation",
          description: "Daily video creation limit",
          field: "videoLimit",
          type: "number"
        },
        {
          name: "Voice Generation",
          description: "Text-to-speech audio synthesis",
          field: "voiceGenAllowed",
          type: "boolean"
        }
      ]
    },
    {
      category: "INTELLIGENCE",
      items: [
        {
          name: "AI Web Search",
          description: "Real-time web search capability",
          field: "webSearchAllowed",
          type: "boolean"
        },
        {
          name: "AI Deep Search",
          description: "AI Deep Search capability",
          field: "deepSearchAllowed",
          type: "boolean"
        },
        {
          name: "AI Code Writer",
          description: "Programming support and code generator",
          field: "codeWriterAllowed",
          type: "boolean"
        },
        {
          name: "AI Document Converter",
          description: "Access to document format conversion tool",
          field: "documentConvertAllowed",
          type: "boolean"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-maintext", children: "Plan Services & Limits (Tool Matrix)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext", children: "Directly edit limits, permissions, and service capabilities for each plan in the grid below." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-xs font-bold text-subtext uppercase tracking-wider w-[280px]", children: "Service / Tool Name" }),
        editedPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-xs font-black text-maintext uppercase tracking-wider text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-maintext", children: plan.planName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-primary/80 lowercase font-medium mt-0.5", children: [
            "₹",
            plan.priceMonthly,
            "/mo"
          ] })
        ] }) }, plan._id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: services.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-white/10 dark:bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: editedPlans.length + 1, className: "px-4 py-2 text-xs font-extrabold text-primary uppercase tracking-wider", children: cat.category }) }),
        cat.items.map((item, itemIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10 dark:border-b-white/5 hover:bg-white/10 dark:hover:bg-white/5 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-subtext/80 mt-0.5", children: item.description })
          ] }),
          editedPlans.map((plan) => {
            const val = plan[item.field];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-center", children: [
              item.type === "boolean" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!val,
                  onChange: (e) => handleValueChange(plan._id, item.field, e.target.checked),
                  className: "w-4.5 h-4.5 accent-primary rounded border-white/20 cursor-pointer flex items-center justify-center mx-auto"
                }
              ),
              item.type === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  value: val ?? 0,
                  onChange: (e) => handleValueChange(plan._id, item.field, Number(e.target.value)),
                  className: "bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-1.5 px-3 text-xs outline-none focus:border-primary text-maintext font-bold text-center w-24 mx-auto block no-spinner font-mono"
                }
              ),
              item.type === "select" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: val || "",
                  onChange: (e) => handleValueChange(plan._id, item.field, e.target.value),
                  className: "bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-1.5 px-3 text-xs outline-none focus:border-primary text-maintext font-bold text-center max-w-[150px] mx-auto block font-mono",
                  children: item.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, className: "bg-slate-50 dark:bg-zinc-900 text-maintext text-xs font-semibold", children: opt.label }, opt.value))
                }
              )
            ] }, plan._id);
          })
        ] }, itemIdx))
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 dark:bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-subtext space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext", children: "Quick Edit Matrix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Adjust limits and check permissions directly in the comparison grid. Changes are kept locally until you click the save bar at the bottom." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hasUnsavedChanges && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 px-6 py-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl rounded-2xl min-w-[320px] md:min-w-[500px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-maintext", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-amber-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-maintext", children: "Unsaved Changes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-subtext", children: "You have modified the plan limits and permissions matrix." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setEditedPlans(JSON.parse(JSON.stringify(plans))),
                className: "px-4 py-2 text-xs font-bold text-subtext hover:text-maintext hover:bg-white/10 rounded-xl transition-all",
                children: "Reset"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSaveAll,
                disabled: saving,
                className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50",
                children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }),
                  "Saving..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
                  "Save All Changes"
                ] })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
};
const SettingsTab = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await apiService.getAdminSettings();
        setSettings(data);
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);
  const handleSave = async () => {
    setSaving(true);
    try {
      await apiService.updateAdminSettings(settings);
      zt.success("Settings saved");
    } catch (err) {
      zt.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SectionCard,
    {
      title: "Admin Settings",
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleSave,
          disabled: saving,
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50",
          children: [
            saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "Save"
          ]
        }
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Organization Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: (settings == null ? void 0 : settings.organizationName) || "",
              onChange: (e) => setSettings((p) => ({ ...p, organizationName: e.target.value })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Default AI Model" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: (settings == null ? void 0 : settings.defaultModel) || "",
              onChange: (e) => setSettings((p) => ({ ...p, defaultModel: e.target.value })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Max Tokens Per User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: (settings == null ? void 0 : settings.maxTokensPerUser) || "",
              onChange: (e) => setSettings((p) => ({ ...p, maxTokensPerUser: Number(e.target.value) })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Allow Public Signup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSettings((p) => ({ ...p, allowPublicSignup: !p.allowPublicSignup })),
              className: `w-full py-3 rounded-xl font-bold text-sm transition-all border ${(settings == null ? void 0 : settings.allowPublicSignup) ? "bg-green-500/10 border-green-500/30 text-green-500" : "bg-red-500/10 border-red-500/30 text-red-500"}`,
              children: (settings == null ? void 0 : settings.allowPublicSignup) ? "Enabled" : "Disabled"
            }
          )
        ] })
      ] })
    }
  );
};
const LegalPagesTab = () => {
  const { t } = useLanguage();
  const [selectedPage, setSelectedPage] = reactExports.useState("cookie-policy");
  const [pageData, setPageData] = reactExports.useState({ sections: [] });
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [isParsing, setIsParsing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPage();
  }, [selectedPage]);
  const fetchPage = async () => {
    setLoading(true);
    try {
      const data = await apiService.getLegalPage(selectedPage);
      if (data && data.sections && data.sections.length > 0) {
        setPageData(data);
      } else {
        setPageData({
          sections: [],
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    } catch (err) {
      zt.error("Failed to fetch legal page data");
      setPageData({ sections: [] });
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    setSaving(true);
    try {
      await apiService.updateLegalPage(selectedPage, pageData.sections);
      zt.success("Legal page updated successfully");
    } catch (err) {
      zt.error("Failed to update legal page");
    } finally {
      setSaving(false);
    }
  };
  const addSection = () => {
    setPageData((prev) => ({
      ...prev,
      sections: [...prev.sections, { title: "New Section", content: [{ subtitle: "New Subtitle", text: "Section content here..." }] }]
    }));
  };
  const removeSection = (index) => {
    setPageData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };
  const updateSection = (index, field, value) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[index] = { ...newSections[index], [field]: value };
      return { ...prev, sections: newSections };
    });
  };
  const addContent = (sectionIndex) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        content: [...newSections[sectionIndex].content, { subtitle: "New Subtitle", text: "Content text here..." }]
      };
      return { ...prev, sections: newSections };
    });
  };
  const removeContent = (sectionIndex, contentIndex) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        content: newSections[sectionIndex].content.filter((_, i) => i !== contentIndex)
      };
      return { ...prev, sections: newSections };
    });
  };
  const updateContent = (sectionIndex, contentIndex, field, value) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      const newContent = [...newSections[sectionIndex].content];
      newContent[contentIndex] = { ...newContent[contentIndex], [field]: value };
      newSections[sectionIndex] = { ...newSections[sectionIndex], content: newContent };
      return { ...prev, sections: newSections };
    });
  };
  const handleDocUpload = async (e) => {
    var _a, _b, _c, _d;
    const file = e.target.files[0];
    if (!file) return;
    setIsParsing(true);
    try {
      const res = await apiService.parseLegalDoc(file);
      if (res.success && res.sections && res.sections.length > 0) {
        setPageData((prev) => ({ ...prev, sections: res.sections }));
        zt.success(`Successfully parsed ${res.sections.length} sections from ${file.name}!`);
      } else {
        zt.error("Could not detect sections in the document.");
      }
    } catch (err) {
      console.error("Doc upload error:", err);
      const errMsg = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = err.response) == null ? void 0 : _c.data) == null ? void 0 : _d.error) || err.message;
      zt.error(errMsg || "Failed to parse document. Ensure it is a valid PDF, DOCX, or TXT file.");
    } finally {
      setIsParsing(false);
      e.target.value = "";
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 bg-white/20 dark:bg-white/5 rounded-xl p-1 border border-white/10 overflow-x-auto admin-horizontal-scrollbar", children: ["cookie-policy", "terms-of-service", "privacy-policy"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSelectedPage(type),
          className: `px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${selectedPage === type ? "bg-primary text-white shadow-md" : "text-subtext hover:bg-white/10 hover:text-maintext"}`,
          children: type.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        },
        type
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-maintext rounded-xl font-bold text-sm transition-all border border-white/20 cursor-pointer ${isParsing ? "opacity-50 cursor-not-allowed" : ""}`, children: [
          isParsing ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { className: "w-4 h-4" }),
          isParsing ? "Parsing..." : "Upload Document",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              className: "hidden",
              accept: ".txt,.md,.pdf,.docx",
              onChange: handleDocUpload,
              disabled: isParsing
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSave,
            disabled: saving || isParsing,
            className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50",
            children: [
              saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save Changes"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: `${selectedPage.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Content Management`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: addSection,
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold text-maintext border border-white/10 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
              "Add Section"
            ]
          }
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          pageData.sections.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 border-2 border-dashed border-white/10 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm mb-4", children: "No content found. Please create the first section to start building this page." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: addSection,
                className: "px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-bold hover:bg-primary/20 transition-all",
                children: "Create First Section"
              }
            )
          ] }),
          pageData.sections.map((section, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => removeSection(sIdx),
                className: "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-lg shadow-red-500/30",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-primary", children: "Section Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: section.title,
                  onChange: (e) => updateSection(sIdx, "title", e.target.value),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 ml-6 pl-6 border-l-2 border-primary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-primary/50", children: "Section Content Units" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => addContent(sIdx),
                    className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] bg-primary text-white hover:opacity-90 font-bold transition-all shadow-lg shadow-primary/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                      " Add Content Unit"
                    ]
                  }
                )
              ] }),
              section.content.map((item, cIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 dark:bg-black/40 rounded-2xl p-6 space-y-4 relative group border border-white/5 hover:border-primary/30 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => removeContent(sIdx, cIdx),
                    className: "absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        value: item.subtitle,
                        onChange: (e) => updateContent(sIdx, cIdx, "subtitle", e.target.value),
                        placeholder: "Subtitle (e.g. 1.1 Eligibility)",
                        className: `w-full bg-transparent border-none p-0 text-sm font-bold outline-none text-maintext placeholder:text-subtext/20 ${["General Terms", "Policy Overview", "Introduction", "N/A", ""].includes(item.subtitle) ? "opacity-20 italic font-normal" : ""}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      value: item.text,
                      onChange: (e) => updateContent(sIdx, cIdx, "text", e.target.value),
                      rows: 3,
                      className: "w-full bg-transparent border-none p-0 text-xs outline-none text-subtext resize-none placeholder:text-subtext/30"
                    }
                  )
                ] })
              ] }, cIdx))
            ] })
          ] }, sIdx))
        ] })
      }
    )
  ] });
};
const KnowledgeBaseTab = () => {
  const { t } = useLanguage();
  const [refreshTrigger, setRefreshTrigger] = reactExports.useState(0);
  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
    zt.success(t("uploadSuccessKnowledge"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" }) }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: t("ingestNewKnowledge"),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext font-medium", children: t("addFilesWebsitesRAG") }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeUpload, { onUploadSuccess: handleUploadSuccess })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: t("knowledgeAssetsManagement"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeManagement, {}, refreshTrigger) })
  ] }) });
};
const STATUS_META = {
  active: { label: "Active", color: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
  completed: { label: "Completed", color: "bg-green-500/15 text-green-400 border-green-500/30" },
  abandoned: { label: "Abandoned", color: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  failed: { label: "Failed", color: "bg-red-500/15 text-red-400 border-red-500/30" }
};
const MODE_LABELS = {
  NORMAL_CHAT: "Normal Chat",
  chat: "Normal Chat",
  CHAT: "Normal Chat",
  web_search: "Web Search",
  DEEP_SEARCH: "Deep Search",
  CODE_WRITER: "Code Writer",
  CODING_HELP: "Code Writer",
  code: "Code Writer",
  LEGAL_TOOLKIT: "AI Legal",
  legal: "AI Legal",
  IMAGE_GENERATION: "Generate Image",
  imageGen: "Generate Image",
  image: "Generate Image",
  VIDEO_GENERATION: "Generate Video",
  videoGen: "Generate Video",
  video: "Generate Video",
  AUDIO_CONVERT: "Convert to Audio",
  audioGen: "Convert to Audio",
  audio: "Convert to Audio",
  DOCUMENT_CONVERT: "Convert Documents",
  document: "Convert Documents",
  IMAGE_EDIT: "Edit Image",
  editImage: "Edit Image",
  edit_image: "Edit Image",
  CASHFLOW: "AI CashFlow",
  ai_cashflow: "AI CashFlow"
};
const SessionStatusBadge = ({ status }) => {
  const meta = STATUS_META[status] || { label: status, color: "bg-gray-500/15 text-gray-400 border-gray-500/30" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border ${meta.color}`, children: meta.label });
};
const ChatSessionsTab = () => {
  var _a, _b, _c, _d;
  const { t } = useLanguage();
  const [stats, setStats] = reactExports.useState(null);
  const [sessions, setSessions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [statsLoading, setStatsLoading] = reactExports.useState(true);
  const [pagination, setPagination] = reactExports.useState({ total: 0, page: 1, limit: 15, totalPages: 1 });
  const [selectedSession, setSelectedSession] = reactExports.useState(null);
  const [detailLoading, setDetailLoading] = reactExports.useState(false);
  const [mailModal, setMailModal] = reactExports.useState({ isOpen: false, email: "", subject: "", message: "", sending: false });
  const handleOpenMailModal = (email) => {
    setMailModal({
      isOpen: true,
      email: email || "",
      subject: "Notification from AISA Admin",
      message: "",
      sending: false
    });
  };
  const handleSendMail = async (e) => {
    var _a2, _b2;
    e.preventDefault();
    if (!mailModal.email || !mailModal.message) {
      zt.error("Recipient email and message are required.");
      return;
    }
    setMailModal((prev) => ({ ...prev, sending: true }));
    try {
      const res = await apiService.sendEmailToUser({
        toEmail: mailModal.email,
        subject: mailModal.subject || "Message from AISA Admin",
        message: mailModal.message
      });
      if (res.success) {
        zt.success("Email sent successfully!");
        setMailModal({ isOpen: false, email: "", subject: "", message: "", sending: false });
      } else {
        zt.error(res.message || "Failed to send email.");
      }
    } catch (err) {
      zt.error(((_b2 = (_a2 = err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b2.message) || "Failed to send email.");
    } finally {
      setMailModal((prev) => ({ ...prev, sending: false }));
    }
  };
  const [search, setSearch] = reactExports.useState("");
  const [filterStatus, setFilterStatus] = reactExports.useState("");
  const [filterMode, setFilterMode] = reactExports.useState("");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const data = await apiService.getAdminChatSessionStats();
      if (data.success) setStats(data.stats);
    } catch (err) {
      console.error("Chat session stats error:", err);
    } finally {
      setStatsLoading(false);
    }
  };
  const fetchSessions = async (page = 1) => {
    setLoading(true);
    try {
      const data = await apiService.getAdminChatSessions({
        page,
        limit: pagination.limit,
        search,
        status: filterStatus,
        mode: filterMode,
        dateFrom,
        dateTo
      });
      if (data.success) {
        setSessions(data.sessions || []);
        setPagination(data.pagination || { total: 0, page: 1, limit: 15, totalPages: 1 });
      }
    } catch (err) {
      console.error("Chat sessions list error:", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchDetail = async (sessionId) => {
    setDetailLoading(true);
    try {
      const data = await apiService.getAdminChatSessionDetail(sessionId);
      if (data.success) setSelectedSession(data.session);
    } catch (err) {
      console.error("Chat session detail error:", err);
    } finally {
      setDetailLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchStats();
  }, []);
  reactExports.useEffect(() => {
    fetchSessions(1);
  }, [search, filterStatus, filterMode, dateFrom, dateTo]);
  const formatDate = (val) => {
    if (!val) return "—";
    return new Date(typeof val === "number" ? val : val).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const statCards = [
    { label: "Total Sessions", value: (stats == null ? void 0 : stats.totalSessions) ?? "—", icon: MessageSquare, color: "text-primary" },
    { label: "Active Now", value: ((_a = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _a.active) ?? "—", icon: Activity, color: "text-blue-400" },
    { label: "Completed", value: ((_b = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _b.completed) ?? "—", icon: Check, color: "text-green-400" },
    { label: "Abandoned", value: ((_c = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _c.abandoned) ?? "—", icon: CircleAlert, color: "text-amber-400" },
    { label: "Failed", value: ((_d = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _d.failed) ?? "—", icon: Ban, color: "text-red-400" },
    { label: "Total Messages", value: (stats == null ? void 0 : stats.totalMessages) ?? "—", icon: Layers, color: "text-purple-400" },
    { label: "Avg Messages/Session", value: (stats == null ? void 0 : stats.avgMessages) ?? "—", icon: TrendingUp, color: "text-cyan-400" },
    { label: "Avg Duration", value: (stats == null ? void 0 : stats.avgDuration) ?? "—", icon: Clock, color: "text-pink-400" },
    { label: "Guest Sessions", value: (stats == null ? void 0 : stats.totalGuestSessions) ?? "—", icon: Users, color: "text-orange-400" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3", children: statCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.04 },
        className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2 hover:border-primary/30 transition-all group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: `w-4 h-4 ${card.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black ${statsLoading ? "opacity-30 animate-pulse" : ""} text-maintext`, children: statsLoading ? "…" : card.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-subtext uppercase tracking-wider leading-tight", children: card.label })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-stretch sm:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:flex-1 sm:min-w-48", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search by name, email or session ID…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary/50 transition-all placeholder:text-subtext/40 text-maintext"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[120px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterStatus,
              onChange: (e) => setFilterStatus(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "abandoned", children: "Abandoned" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: "Failed" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[120px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterMode,
              onChange: (e) => setFilterMode(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Modes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NORMAL_CHAT", children: "Normal Chat" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "web_search", children: "Web Search" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DEEP_SEARCH", children: "Deep Search" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CODE_WRITER", children: "Code Writer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LEGAL_TOOLKIT", children: "AI Legal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IMAGE_GENERATION", children: "Generate Image" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VIDEO_GENERATION", children: "Generate Video" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AUDIO_CONVERT", children: "Convert to Audio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DOCUMENT_CONVERT", children: "Convert Documents" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IMAGE_EDIT", children: "Edit Image" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CASHFLOW", children: "AI CashFlow" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[110px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[110px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all"
            }
          )
        ] })
      ] }),
      (search || filterStatus || filterMode || dateFrom || dateTo) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setSearch("");
            setFilterStatus("");
            setFilterMode("");
            setDateFrom("");
            setDateTo("");
          },
          className: "px-4 py-2.5 rounded-xl text-sm font-bold text-subtext hover:text-red-400 hover:bg-red-500/10 transition-all border border-white/10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-white/20 dark:border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-primary" }),
          "Chat Sessions",
          !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext font-normal ml-1", children: [
            "(",
            pagination.total,
            " total)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          fetchStats();
          fetchSessions(pagination.page);
        }, className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all", title: "Refresh", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${loading ? "animate-spin" : ""}` }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[720px] text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-white/10", children: ["Session ID", "User", "Email", "Mode", "Start Time", "Duration", "Total", "User", "AI", "Status"].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-[10px] font-bold text-subtext uppercase tracking-wider whitespace-nowrap", children: h }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loading ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-white/5", children: Array.from({ length: 10 }).map((_2, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-white/10 rounded-full animate-pulse", style: { width: `${40 + Math.random() * 40}%` } }) }, j)) }, i)) : sessions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 10, className: "text-center py-12 text-subtext text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
          "No sessions found"
        ] }) }) : sessions.map((s, i) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.tr,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: i * 0.02 },
              onClick: () => fetchDetail(s.sessionId),
              className: "border-b border-white/5 hover:bg-primary/5 cursor-pointer transition-all group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-primary/80 group-hover:text-primary transition-colors", children: [
                  (_a2 = s.sessionId) == null ? void 0 : _a2.slice(0, 12),
                  "…"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-maintext text-xs whitespace-nowrap", children: s.userName || "Guest" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext text-xs whitespace-nowrap", children: s.userEmail || "—" }),
                  s.userEmail && s.userEmail !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        handleOpenMailModal(s.userEmail);
                      },
                      className: "p-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100",
                      title: "Send Email to User",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: MODE_LABELS[s.detectedMode] || s.detectedMode || "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: formatDate(s.createdAt) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-subtext", children: s.duration || "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-maintext", children: s.totalMessages ?? 0 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-400 font-semibold", children: s.userMessages ?? 0 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-400 font-semibold", children: s.aiMessages ?? 0 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SessionStatusBadge, { status: s.sessionStatus }) })
              ]
            },
            s.sessionId || i
          );
        }) })
      ] }) }),
      pagination.totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext", children: [
          "Page ",
          pagination.page,
          " of ",
          pagination.totalPages,
          "  ·  ",
          pagination.total,
          " sessions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: pagination.page <= 1 || loading,
              onClick: () => fetchSessions(pagination.page - 1),
              className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-maintext px-2", children: pagination.page }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: pagination.page >= pagination.totalPages || loading,
              onClick: () => fetchSessions(pagination.page + 1),
              className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: (selectedSession || detailLoading) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[2050] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4",
        onClick: (e) => {
          if (e.target === e.currentTarget) setSelectedSession(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 40 },
            transition: { type: "spring", damping: 28, stiffness: 300 },
            className: "bg-white dark:bg-[#12141a] border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm", children: "Session Detail" }),
                    selectedSession && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-subtext", children: selectedSession.sessionId })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedSession(null),
                    className: "p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              detailLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center flex-1 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 text-primary animate-spin" }) }) : selectedSession && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 p-5 border-b border-white/10", children: [
                  { label: "User", value: selectedSession.userName || "Guest" },
                  { label: "Email", value: selectedSession.userEmail ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedSession.userEmail }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => handleOpenMailModal(selectedSession.userEmail),
                        className: "flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/20 hover:bg-primary/30 text-primary text-[9px] font-bold uppercase transition-all",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-2.5 h-2.5" }),
                          " Send"
                        ]
                      }
                    )
                  ] }) : "—" },
                  { label: "Status", value: /* @__PURE__ */ jsxRuntimeExports.jsx(SessionStatusBadge, { status: selectedSession.sessionStatus }) },
                  { label: "Mode", value: MODE_LABELS[selectedSession.detectedMode] || selectedSession.detectedMode || "—" },
                  { label: "Duration", value: selectedSession.duration || "—" },
                  { label: "Start Time", value: formatDate(selectedSession.createdAt) },
                  { label: "Last Activity", value: formatDate(selectedSession.lastModified) },
                  { label: "Total Messages", value: selectedSession.totalMessages ?? 0 },
                  { label: "User / AI", value: `${selectedSession.userMessages ?? 0} / ${selectedSession.aiMessages ?? 0}` }
                ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 dark:bg-white/5 rounded-xl p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider mb-1", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-maintext", children: item.value })
                ] }, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider mb-3", children: "Conversation History" }),
                  !selectedSession.messages || selectedSession.messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext text-sm py-6", children: "No messages in this session" }) : selectedSession.messages.map((msg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                      children: [
                        msg.role !== "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3 h-3 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] rounded-2xl px-3 py-2 text-xs ${msg.role === "user" ? "bg-primary/20 text-maintext rounded-br-sm" : "bg-white/20 dark:bg-white/5 text-maintext rounded-bl-sm"}`, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed whitespace-pre-wrap break-words line-clamp-6", children: msg.content }),
                          msg.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary mt-1", children: "📸 Image attached" }),
                          msg.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary mt-1", children: "🎬 Video attached" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext/60 mt-1 text-right", children: msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "" })
                        ] }),
                        msg.role === "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 text-blue-400" }) })
                      ]
                    },
                    msg.id || idx
                  ))
                ] })
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mailModal.isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[2100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
        onClick: () => setMailModal((prev) => ({ ...prev, isOpen: false })),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 20 },
            className: "bg-white dark:bg-[#12141a] border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-lg p-6 relative overflow-hidden",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext text-lg font-bold", children: "Send Email to User" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext", children: "Direct communication from AISA™ Admin" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setMailModal((prev) => ({ ...prev, isOpen: false })),
                    className: "p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSendMail, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "To" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      readOnly: true,
                      disabled: true,
                      value: mailModal.email,
                      className: "w-full bg-white/20 dark:bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-subtext outline-none cursor-not-allowed"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider font-semibold", children: "Subject" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      value: mailModal.subject,
                      onChange: (e) => setMailModal((prev) => ({ ...prev, subject: e.target.value })),
                      className: "w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 px-4 text-sm text-maintext outline-none focus:border-primary/50 transition-all",
                      placeholder: "Enter email subject..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider font-semibold font-bold", children: "Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      required: true,
                      rows: 6,
                      value: mailModal.message,
                      onChange: (e) => setMailModal((prev) => ({ ...prev, message: e.target.value })),
                      className: "w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 px-4 text-sm text-maintext outline-none focus:border-primary/50 transition-all resize-none",
                      placeholder: "Write your email message here..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t border-white/10 mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMailModal((prev) => ({ ...prev, isOpen: false })),
                      className: "px-5 py-2.5 rounded-xl text-sm font-bold text-subtext hover:text-maintext transition-all hover:bg-white/5",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: mailModal.sending,
                      className: "px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: mailModal.sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
                        "Sending..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        "Send Email"
                      ] })
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
};
const AnalyticsTab = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [range, setRange] = reactExports.useState("7d");
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const [drillMode, setDrillMode] = reactExports.useState(null);
  const [drillData, setDrillData] = reactExports.useState(null);
  const [drillLoading, setDrillLoading] = reactExports.useState(false);
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const fetchAnalytics = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    else setLoading(true);
    try {
      const res = await apiService.getAdminAnalytics(range);
      setData(res.analytics);
    } catch (err) {
      console.error("Analytics fetch failed:", err);
      zt.error("Failed to load analytics");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  const openDrillDown = async (mode) => {
    setDrillMode(mode);
    setDrawerOpen(true);
    setDrillLoading(true);
    setDrillData(null);
    try {
      const res = await apiService.getAdminErrorDrillDown(mode, range);
      setDrillData(res.drillDown);
    } catch (err) {
      console.error("Drill-down fetch failed:", err);
      zt.error("Failed to load error details");
    } finally {
      setDrillLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchAnalytics();
  }, [range]);
  const MODE_LABELS2 = {
    NORMAL_CHAT: "AI Chat",
    LEGAL_TOOLKIT: "Legal Toolkit",
    IMAGE_GENERATION: "Image Generation",
    VIDEO_GENERATION: "Video Generation",
    IMAGE_EDIT: "Image Edit",
    AUDIO_CONVERT: "Audio Convert",
    DOCUMENT_CONVERT: "Document Convert",
    CODE_WRITER: "Code Writer",
    CASHFLOW: "Cashflow",
    RAG: "RAG / Knowledge"
  };
  const MODE_COLORS = [
    "#6C63FF",
    "#FF6584",
    "#43D9B2",
    "#FFB347",
    "#4FC3F7",
    "#E57373",
    "#81C784",
    "#FFD54F",
    "#BA68C8",
    "#4DB6AC"
  ];
  const getLabel = (mode) => MODE_LABELS2[mode] || mode || "Unknown";
  const maxModeCount = ((_b = (_a = data == null ? void 0 : data.modeUsage) == null ? void 0 : _a[0]) == null ? void 0 : _b.count) || 1;
  const maxErrorCount = ((_d = (_c = data == null ? void 0 : data.errorByMode) == null ? void 0 : _c[0]) == null ? void 0 : _d.errorCount) || 1;
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm", children: "Loading analytics..." })
  ] });
  const mainContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-black text-maintext flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "w-5 h-5 text-primary" }),
          " Analytics Overview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext mt-0.5", children: "Error rates, card usage & trends" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 bg-white/10 dark:bg-white/5 rounded-xl p-1 border border-white/20", children: ["24h", "7d", "30d", "90d"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setRange(r),
            className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${range === r ? "bg-primary text-white shadow-md" : "text-subtext hover:text-maintext hover:bg-white/10"}`,
            children: r
          },
          r
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => fetchAnalytics(true),
            disabled: refreshing,
            className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all disabled:opacity-50",
            title: "Refresh",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${refreshing ? "animate-spin" : ""}` })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-primary/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-primary" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: ((_e = data == null ? void 0 : data.summary) == null ? void 0 : _e.totalSessions) ?? 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Total Sessions" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-red-400/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-red-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-bold px-2 py-1 rounded-lg ${((_f = data == null ? void 0 : data.summary) == null ? void 0 : _f.errorRate) > 20 ? "text-red-400 bg-red-400/10" : ((_g = data == null ? void 0 : data.summary) == null ? void 0 : _g.errorRate) > 10 ? "text-amber-400 bg-amber-400/10" : "text-green-400 bg-green-400/10"}`, children: [
                ((_h = data == null ? void 0 : data.summary) == null ? void 0 : _h.errorRate) ?? 0,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: ((_i = data == null ? void 0 : data.summary) == null ? void 0 : _i.totalErrors) ?? 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Error Sessions" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-emerald-400/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-emerald-400" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: ((_j = data == null ? void 0 : data.summary) == null ? void 0 : _j.newUsers) ?? 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "New Users" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-amber-400/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-amber-400" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black text-maintext truncate", children: getLabel((_k = data == null ? void 0 : data.summary) == null ? void 0 : _k.topMode) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Top Used Card" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-primary" }),
            " Card Usage Breakdown"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext bg-white/10 px-2 py-1 rounded-lg", children: [
            "Last ",
            range
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-3", children: ((data == null ? void 0 : data.modeUsage) || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext text-sm py-6", children: "No data for this period" }) : ((data == null ? void 0 : data.modeUsage) || []).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full shrink-0", style: { backgroundColor: MODE_COLORS[i % MODE_COLORS.length] } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-maintext", children: getLabel(m._id) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-subtext", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-maintext", children: m.count }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "sessions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 dark:bg-white/5 rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${Math.round(m.count / maxModeCount * 100)}%` },
              transition: { duration: 0.6, delay: i * 0.05 },
              className: "h-1.5 rounded-full",
              style: { backgroundColor: MODE_COLORS[i % MODE_COLORS.length] }
            }
          ) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-400" }),
            " Errors by Card/Mode"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-lg flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
            " Click to inspect"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-2", children: ((data == null ? void 0 : data.errorByMode) || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext text-sm py-6", children: "🎉 No errors in this period!" }) : ((data == null ? void 0 : data.errorByMode) || []).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => openDrillDown(m._id),
            className: "w-full text-left group p-3 rounded-xl border border-transparent hover:border-red-400/30 hover:bg-red-400/5 transition-all cursor-pointer space-y-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400/70 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-maintext group-hover:text-red-400 transition-colors", children: getLabel(m._id) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-400", children: [
                    m.errorCount,
                    " errors"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext", children: [
                    m.uniqueSessionCount,
                    " sessions"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-subtext group-hover:text-red-400 transition-colors" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 dark:bg-white/5 rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${Math.round(m.errorCount / maxErrorCount * 100)}%` },
                  transition: { duration: 0.6, delay: i * 0.05 },
                  className: "h-1.5 rounded-full bg-gradient-to-r from-red-500 to-red-400"
                }
              ) })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-emerald-400" }),
          " Daily Sessions Trend"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: ((data == null ? void 0 : data.dailyTrend) || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext text-sm py-6", children: "No trend data" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-28", children: ((data == null ? void 0 : data.dailyTrend) || []).map((d, i) => {
            const maxSessions = Math.max(...((data == null ? void 0 : data.dailyTrend) || []).map((x) => x.sessions), 1);
            const heightPct = Math.max(4, Math.round(d.sessions / maxSessions * 100));
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center flex-1 gap-1", title: `${d._id}: ${d.sessions} sessions`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0 },
                animate: { height: `${heightPct}%` },
                transition: { duration: 0.5, delay: i * 0.03 },
                className: "w-full rounded-t-md bg-gradient-to-t from-primary to-primary/50 min-h-[4px]",
                style: { height: `${heightPct}%` }
              }
            ) }, i);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-subtext px-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_n = (_m = (_l = data == null ? void 0 : data.dailyTrend) == null ? void 0 : _l[0]) == null ? void 0 : _m._id) == null ? void 0 : _n.slice(5) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_r = (_q = (_p = data == null ? void 0 : data.dailyTrend) == null ? void 0 : _p[Math.floor((((_o = data == null ? void 0 : data.dailyTrend) == null ? void 0 : _o.length) || 0) / 2)]) == null ? void 0 : _q._id) == null ? void 0 : _r.slice(5) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_v = (_u = (_t = data == null ? void 0 : data.dailyTrend) == null ? void 0 : _t[((_s = data == null ? void 0 : data.dailyTrend) == null ? void 0 : _s.length) - 1]) == null ? void 0 : _u._id) == null ? void 0 : _v.slice(5) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-2 gap-2", children: ((data == null ? void 0 : data.dailyTrend) || []).slice(-3).reverse().map((d, i) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2 bg-white/10 dark:bg-white/5 rounded-xl text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext", children: (_a2 = d._id) == null ? void 0 : _a2.slice(5) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: d.sessions })
            ] }, i);
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-400" }),
          " Error Categories"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-3", children: ((data == null ? void 0 : data.topErrors) || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext text-sm py-6", children: "🎉 Zero errors found!" }) : ((data == null ? void 0 : data.topErrors) || []).map((e, i) => {
          var _a2, _b2;
          const colors = {
            "Timeout": "#FFB347",
            "Task Failed": "#FF6584",
            "AI Refusal": "#4FC3F7",
            "System Error": "#E57373",
            "General Error": "#BA68C8"
          };
          const color = colors[e.category] || "#6C63FF";
          const maxC = ((_b2 = (_a2 = data == null ? void 0 : data.topErrors) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.count) || 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-white/10 dark:bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0", style: { backgroundColor: color + "20" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4", style: { color } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-maintext", children: e.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", style: { color }, children: e.count })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 rounded-full h-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${Math.round(e.count / maxC * 100)}%` },
                  transition: { duration: 0.5, delay: i * 0.05 },
                  className: "h-1 rounded-full",
                  style: { backgroundColor: color }
                }
              ) })
            ] })
          ] }, i);
        }) })
      ] })
    ] }),
    ((data == null ? void 0 : data.recentErrorSessions) || []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-red-400" }),
          " Recent Error Sessions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext", children: [
          "Top ",
          (_w = data == null ? void 0 : data.recentErrorSessions) == null ? void 0 : _w.length,
          " sessions with errors"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-bold text-subtext uppercase tracking-wider", children: "Session ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-bold text-subtext uppercase tracking-wider", children: "Mode / Card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-bold text-subtext uppercase tracking-wider", children: "Errors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-bold text-subtext uppercase tracking-wider", children: "Date" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ((data == null ? void 0 : data.recentErrorSessions) || []).map((s, i) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 hover:bg-white/5 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-lg", children: [
              (_a2 = s.sessionId) == null ? void 0 : _a2.substring(0, 16),
              "..."
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-maintext", children: getLabel(s.mode) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded-lg", children: [
              s.errorCount,
              " errors"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-xs text-subtext", children: s.createdAt ? new Date(s.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) : "-" })
          ] }, i);
        }) })
      ] }) })
    ] })
  ] });
  const maxPatternCount = ((_y = (_x = drillData == null ? void 0 : drillData.patterns) == null ? void 0 : _x[0]) == null ? void 0 : _y.count) || 1;
  const maxDailyErr = Math.max(...((drillData == null ? void 0 : drillData.dailyErrors) || []).map((d) => d.errorCount), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 relative", children: [
    mainContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: drawerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setDrawerOpen(false),
          className: "fixed inset-0 lg:left-[280px] bg-black/50 backdrop-blur-sm z-40"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "spring", damping: 28, stiffness: 280 },
          className: "fixed right-0 top-0 h-full w-full max-w-xl bg-white dark:bg-[#0f0f1a] border-l border-white/20 dark:border-white/10 z-50 overflow-y-auto shadow-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-white/90 dark:bg-[#0f0f1a]/90 backdrop-blur-xl border-b border-white/20 dark:border-white/10 p-5 z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-red-400 uppercase tracking-widest", children: "Error Analysis" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-black text-maintext", children: MODE_LABELS2[drillMode] || drillMode }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-subtext mt-0.5", children: [
                    "Last ",
                    range,
                    " • Detailed error breakdown"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setDrawerOpen(false),
                    className: "w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              drillData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-500/10 border border-red-400/20 rounded-xl p-3 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-red-400", children: drillData.totalErrorInstances }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext uppercase tracking-wider mt-0.5", children: "Total Errors" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-500/10 border border-amber-400/20 rounded-xl p-3 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-amber-400", children: drillData.affectedSessions }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext uppercase tracking-wider mt-0.5", children: "Affected Sessions" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-5", children: drillLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-7 h-7 text-primary animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm", children: "Analyzing errors..." })
            ] }) : drillData ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-400" }),
                  " Error Type Breakdown"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drillData.patterns.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full shrink-0", style: { backgroundColor: p.color } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-maintext", children: p.label })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: p.color }, children: [
                        p.count,
                        "×"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext", children: [
                        p.sessionCount,
                        " sessions"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 rounded-full h-1.5 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      animate: { width: `${Math.round(p.count / maxPatternCount * 100)}%` },
                      transition: { duration: 0.5, delay: i * 0.04 },
                      className: "h-1.5 rounded-full",
                      style: { backgroundColor: p.color }
                    }
                  ) }),
                  p.samples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext uppercase tracking-wider font-bold", children: "Sample Messages:" }),
                    p.samples.map((sample, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/10 dark:bg-black/30 rounded-lg px-3 py-2 text-xs text-subtext font-mono leading-relaxed border border-white/5", children: [
                      '"',
                      sample.length > 200 ? sample.substring(0, 200) + "..." : sample,
                      '"'
                    ] }, si))
                  ] })
                ] }, i)) })
              ] }),
              drillData.toolStats.length > 0 && drillData.toolStats[0].tool !== "General" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-primary" }),
                  " Errors by Sub-Tool"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drillData.toolStats.slice(0, 6).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-maintext font-medium", children: t.tool }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-lg", children: [
                    t.count,
                    " errors"
                  ] })
                ] }, i)) })
              ] }),
              drillData.dailyErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-red-400" }),
                  " Daily Error Trend"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-20", children: drillData.dailyErrors.map((d, i) => {
                    const heightPct = Math.max(4, Math.round(d.errorCount / maxDailyErr * 100));
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center flex-1 gap-1", title: `${d._id}: ${d.errorCount} errors`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { height: 0 },
                        animate: { height: `${heightPct}%` },
                        transition: { duration: 0.4, delay: i * 0.03 },
                        className: "w-full rounded-t-sm bg-gradient-to-t from-red-500 to-red-300",
                        style: { height: `${heightPct}%` }
                      }
                    ) }, i);
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-subtext mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_A = (_z = drillData.dailyErrors[0]) == null ? void 0 : _z._id) == null ? void 0 : _A.slice(5) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_C = (_B = drillData.dailyErrors[drillData.dailyErrors.length - 1]) == null ? void 0 : _B._id) == null ? void 0 : _C.slice(5) })
                  ] })
                ] })
              ] }),
              drillData.recentSessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-subtext" }),
                  " Recent Affected Sessions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drillData.recentSessions.map((s, i) => {
                  var _a2;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-3 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-lg", children: [
                        (_a2 = s.sessionId) == null ? void 0 : _a2.substring(0, 20),
                        "..."
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-400 font-bold bg-red-400/10 px-2 py-0.5 rounded-lg", children: [
                          s.errorCount,
                          " errors"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext", children: s.createdAt ? new Date(s.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) : "-" })
                      ] })
                    ] }),
                    s.topError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-subtext bg-black/10 dark:bg-black/30 rounded-lg px-2.5 py-1.5 font-mono leading-relaxed border border-white/5 line-clamp-3", children: s.topError })
                  ] }, i);
                }) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-subtext", children: "No data available" }) })
          ]
        }
      )
    ] }) })
  ] });
};
const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const navigate = useNavigate();
  const user = getUserData();
  const isAdmin = (user == null ? void 0 : user.token) && ((user == null ? void 0 : user.email) === ADMIN_EMAIL || (user == null ? void 0 : user.role) === "admin");
  reactExports.useEffect(() => {
    if (!isAdmin) {
      navigate("/dashboard/chat", { replace: true });
    }
  }, [isAdmin, navigate]);
  if (!isAdmin) return null;
  const tabs = [
    { id: "overview", label: t("overview"), icon: ChartColumn },
    { id: "users", label: t("users"), icon: Users },
    { id: "chat-sessions", label: "Chat Sessions", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: ChartPie },
    { id: "plans", label: t("plans"), icon: CreditCard },
    { id: "tool-limit", label: t("toolLimit") || "Tool Limit", icon: Shield },
    { id: "legal", label: t("legalPages"), icon: FileText },
    { id: "helpdesk", label: t("helpDesk"), icon: Headphones },
    { id: "knowledge", label: t("knowledge"), icon: BookOpen },
    { id: "settings", label: t("settings"), icon: Settings }
  ];
  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {});
      case "users":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTab, {});
      case "chat-sessions":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatSessionsTab, {});
      case "analytics":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsTab, {});
      case "plans":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PlansTab, {});
      case "tool-limit":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolLimitTab, {});
      case "legal":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LegalPagesTab, {});
      case "helpdesk":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminHelpDesk, { isOpen: true, isEmbedded: true });
      case "knowledge":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeBaseTab, {});
      case "settings":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto p-3 sm:p-5 lg:p-8 space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "AISA", className: "w-7 h-7 sm:w-9 sm:h-9 object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-black text-maintext tracking-tight", children: t("adminDashboard") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-subtext font-semibold uppercase tracking-wider hidden sm:block", children: t("platformManagementConsole") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/dashboard/chat"),
          className: "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 dark:hover:bg-white/10 transition-all border border-white/20 dark:border-white/10 shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline sm:inline", children: t("backToChat") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 admin-horizontal-scrollbar scrollbar-hide", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabButton,
      {
        active: activeTab === tab.id,
        icon: tab.icon,
        label: tab.label,
        onClick: () => setActiveTab(tab.id)
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
        children: renderTab()
      },
      activeTab
    ) })
  ] }) });
};
export {
  AdminDashboard as default
};
