(this["webpackJsonpprp-invoice-front-end"] =
  this["webpackJsonpprp-invoice-front-end"] || []).push([
  [0],
  {
    102: function (e, t, n) {
      e.exports = {
        header: "Invoice_header__1gLk3",
        logo: "Invoice_logo__lcjic",
        invoiceNumber: "Invoice_invoiceNumber__tk-1c",
        invoiceLayout: "Invoice_invoiceLayout__2_K5o",
        contacts: "Invoice_contacts__1lLYb",
        address: "Invoice_address__obE0T",
        dates: "Invoice_dates__246IJ",
        number: "Invoice_number__2-l4W",
        amount: "Invoice_amount__2mE2S",
        discount: "Invoice_discount__2eh2y",
        item: "Invoice_item__3HEpB",
        addButton: "Invoice_addButton__UwNNn",
        delete: "Invoice_delete__1nCBd",
        submitButton: "Invoice_submitButton__1gHPJ",
        invoiceSummary: "Invoice_invoiceSummary__2d3pl",
        summary: "Invoice_summary__3HQu8",
        summaryItem: "Invoice_summaryItem__284gz",
        toolBar: "Invoice_toolBar__7J354",
        note: "Invoice_note__1d6VX",
      };
    },
    128: function (e, t, n) {
      e.exports = {
        button: "Password_button__3vEFI",
        buttons: "Password_buttons__3CYGF",
      };
    },
    143: function (e, t, n) {
      e.exports = {
        accountLayout: "Account_accountLayout__3WpX0",
        accountLayoutContainer: "Account_accountLayoutContainer__2IC7U",
      };
    },
    233: function (e, t, n) {
      e.exports = {
        pageContainer: "Login_pageContainer__1jJEC",
        formContainer: "Login_formContainer__1sShP",
        inputField: "Login_inputField__sIEov",
        buttons: "Login_buttons__3a3px",
        submitBtn: "Login_submitBtn__3-9f5",
        googleBtn: "Login_googleBtn__1PQiv",
        loginBtn: "Login_loginBtn__JiEkY",
        switchBtn: "Login_switchBtn__2fql7",
      };
    },
    234: function (e, t, n) {
      e.exports = {
        header: "Header_header__1VCKf",
        header2: "Header_header2__thL1y",
        logo: "Header_logo__3_SJs",
        login: "Header_login__3V3Qa",
        popper: "Header_popper__3qI9y",
      };
    },
    274: function (e, t) {},
    314: function (e, t, n) {
      e.exports = {
        header: "addwallet_header__lnREt",
        logo: "addwallet_logo__3nhIR",
        invoiceNumber: "addwallet_invoiceNumber__10U0V",
        invoiceLayout: "addwallet_invoiceLayout__TAtYJ",
        contacts: "addwallet_contacts__3nrSM",
        address: "addwallet_address__VaQEs",
        dates: "addwallet_dates__dwx8Q",
        number: "addwallet_number__3DkFF",
        amount: "addwallet_amount__2NgBm",
        discount: "addwallet_discount__2YHp0",
        item: "addwallet_item__3oHBM",
        addButton: "addwallet_addButton__206TG",
        delete: "addwallet_delete__1I_FW",
        submitButton: "addwallet_submitButton__Kx9hZ",
        invoiceSummary: "addwallet_invoiceSummary__3RVIx",
        summary: "addwallet_summary__9rUAj",
        summaryItem: "addwallet_summaryItem__EvjE6",
        toolBar: "addwallet_toolBar__28zFz",
        note: "addwallet_note__2UMPR",
      };
    },
    371: function (e, t, n) {},
    496: function (e, t) {},
    497: function (e, t) {},
    514: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        r = n.n(a),
        c = n(28),
        i = n.n(c),
        o = (n(371), n(7)),
        s = n(32),
        l = n(41),
        d = n(37),
        u = n(20),
        j = n(5),
        b = n(10),
        p = n(16),
        h = n(45),
        m = n(664),
        x = n(609),
        v = n(12),
        O = n(144),
        f = n(515),
        g = n(614),
        y = n(615),
        w = n(617),
        C = n(619),
        I = n(516),
        _ = n(620),
        S = n(621),
        k = n(622),
        N = n(623),
        D = n(624),
        T = n(327),
        P = n(625),
        A = n(669),
        B = n(630),
        F = n(631),
        L = n(670),
        E = n(293),
        R = n.n(E),
        V = n(613),
        W = n(22),
        Y = n(298),
        U = n.n(Y),
        M = n(297),
        z = n.n(M),
        q = n(299),
        H = n.n(q),
        $ = n(134),
        G = n.n($),
        J = n(24),
        Q = n(15),
        K = n.n(Q),
        X = n(289),
        Z = n.n(X),
        ee = JSON.parse(localStorage.getItem("profile")),
        te =
          ("localhost" === window.location.hostname || window.location.hostname,
          "https://prp.embassysocial.io"),
        ne = Z.a.create({ baseURL: te });
      ne.interceptors.request.use(function (e) {
        return (
          localStorage.getItem("profile") &&
            (e.headers.authorization = "Bearer ".concat(ee.tokens.accessToken)),
          e
        );
      });
      var ae = function (e, t) {
          return "vendor" === ee.user.role
            ? ne.get("/v1/invoice?limit=".concat(e, "&offset=").concat(t))
            : "admin" === ee.user.role
            ? ne.get("v1/admin/invoice?limit=".concat(e, "&offset=").concat(t))
            : "accountant" === ee.user.role
            ? ne.get(
                "/v1/accountant/invoice?limit=".concat(e, "&offset=").concat(t)
              )
            : "siteManager" === ee.user.role
            ? ne.get(
                "/v1/manager/invoice?limit=".concat(e, "&offset=").concat(t)
              )
            : "superAdmin" === ee.user.role
            ? ne.get(
                "/v1/superAdmin/invoice?limit=".concat(e, "&offset=").concat(t)
              )
            : void 0;
        },
        re = function (e) {
          return ne.post("/v1/wallet/add-ach", {
            successUrl: e,
            failureUrl: e,
          });
        },
        ce = function (e) {
          return ne.post("/v1/wallet/add-paypal", {
            successUrl: e,
            failureUrl: e,
          });
        },
        ie = function (e) {
          return ne.post("/v1/vendor", e);
        },
        oe = function (e) {
          return ne.get("/v1/invoice/details?_id=".concat(e));
        },
        se = function (e, t) {
          return ne.get(
            "/v1/invoice/customLineItem?limit=".concat(e, "&offset=").concat(t)
          );
        },
        le = function (e) {
          return ne.post("/v1/invoice", e);
        },
        de = function (e) {
          return ne.delete("/v1/admin/invoice?_id=".concat(e));
        },
        ue = function (e) {
          return ne.delete("/v1/invoice/customLineItem?_id=".concat(e));
        },
        je = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          return ne.get("/v1/invoice/lineItemTypes", { name: e, _id: t });
        },
        be = function (e) {
          return ne.post("/v1/auth/login", e);
        },
        pe = function (e) {
          return ne.post("/v1/auth/forgot-password", e);
        },
        he = function (e) {
          return ne.post("/v1/auth/logout", e);
        },
        me = function (e) {
          return ne.post("/v1/auth/refresh-tokens", e);
        },
        xe = function (e, t) {
          return ne.get(
            "v1/invoice/deleted?limit=".concat(e, "&offset=").concat(t)
          );
        },
        ve = function (e, t) {
          return ne.get(
            "v1/notification?limit=".concat(e, "&offset=").concat(t)
          );
        },
        Oe = function (e) {
          if ("admin" === ee.user.role || "superAdmin" === ee.user.role)
            return ne.post("/v1/wallet/add-balance", e);
        },
        fe = function (e) {
          return ne.post("/v1/invoice/customLineItem", e);
        },
        ge = function (e) {
          return ne.post("v1/invoice/fetchDcDetails", e);
        },
        ye = function (e) {
          if (
            "admin" === ee.user.role ||
            "superAdmin" === ee.user.role ||
            "vendor" === ee.user.role
          )
            return ne.post("v1/wallet/history", e);
        },
        we = function (e) {
          return ne.get("/v1/reports/vendorBasedDuePaid?vendorId=".concat(e));
        },
        Ce = function (e) {
          if (e) return ne.get("/v1/reports/dcIdsBasedDuePaid?dcId=".concat(e));
        },
        Ie = function (e) {
          if ("vendor" === ee.user.role)
            return ne.post("/v1/vendor/withdraw", e);
        },
        _e = function (e, t) {
          if ("admin" === ee.user.role || "superAdmin" === ee.user.role)
            return ne.get(
              "/v1/admin/withdraw?limit=".concat(e, "&offset=").concat(t)
            );
        },
        Se = function (e, t, n) {
          if ("admin" === ee.user.role || "superAdmin" === ee.user.role)
            return ne.get(
              "/v1/admin/withdraw?limit="
                .concat(t, "&offset=")
                .concat(n, "&status=")
                .concat(e)
            );
        },
        ke = function (e) {
          if ("admin" === ee.user.role || "superAdmin" === ee.user.role)
            return ne.patch("/v1/admin/withdraw", e);
        },
        Ne = "START_LOADING",
        De = "END_LOADING",
        Te = "AUTH",
        Pe = "GET_DC_ID",
        Ae = "LOGOUT",
        Be = "LIST_API",
        Fe = "FETCH_DC_DETAILS",
        Le = "ADD_NEW",
        Ee = "UPDATE",
        Re = "DELETE",
        Ve = "GET_INVOICE",
        We = "FETCH_INVOICE_BY_ID",
        Ye = "GET_ITEMS",
        Ue = "GET_USER_LIST",
        Me = "CUSTOM_LINE_ITEM",
        ze = "GET_VENDOR_LIST",
        qe = "REFRESHTOKEN",
        He = "CHANGE_REQUEST",
        $e = "CREATE_USER",
        Ge = "SHOW_NOTIFICATION",
        Je = "SHOW_NOTIFICATION_BADGE",
        Qe = "FETCH_TRANSACTION_DETAILS",
        Ke = "VENDOR_DUE_REPORT",
        Xe = "DC_ID_REPORT",
        Ze = "GET_WITHDRAWS",
        et = "VENDOR_CREATED",
        tt = "SET_VENDOR_USER",
        nt = "ALL_VENDORS",
        at = "START_WITHDRAW_UPDATE_LOADING",
        rt = "END_WITHDRAW_UPDATE_LOADING",
        ct = function (e, t) {
          return (function () {
            var n = Object(J.a)(
              K.a.mark(function n(a) {
                var r, c, i, o;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: Ne }),
                            (n.next = 4),
                            ae(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: Ve, payload: c }),
                            a({ type: De }),
                            (n.next = 14);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            401 ===
                              (null === n.t0 ||
                              void 0 === n.t0 ||
                              null === (i = n.t0.response) ||
                              void 0 === i ||
                              null === (o = i.data) ||
                              void 0 === o
                                ? void 0
                                : o.code) &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(n.t0.response);
                        case 14:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        it = function () {
          return (function () {
            var e = Object(J.a)(
              K.a.mark(function e(t) {
                var n, a, r, c;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            ne.get("/v1/invoice/dcIds")
                          );
                        case 3:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: Pe, payload: a }),
                            (e.next = 12);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            401 ===
                              (null === e.t0 ||
                              void 0 === e.t0 ||
                              null === (r = e.t0.response) ||
                              void 0 === r ||
                              null === (c = r.data) ||
                              void 0 === c
                                ? void 0
                                : c.code) &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(e.t0.response);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        ot = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          return (function () {
            var n = Object(J.a)(
              K.a.mark(function n(a) {
                var r, c, i, o;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), je(e, t);
                        case 3:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: Ye, payload: c }),
                            (n.next = 12);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n.catch(0)),
                            401 ===
                              (null === n.t0 ||
                              void 0 === n.t0 ||
                              null === (i = n.t0.response) ||
                              void 0 === i ||
                              null === (o = i.data) ||
                              void 0 === o
                                ? void 0
                                : o.code) &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(n.t0);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        st = n(230),
        lt = n.n(st),
        dt = n(34),
        ut = n.n(dt),
        jt = n(102),
        bt = n.n(jt);
      function pt(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      var ht = n(290),
        mt = n.n(ht),
        xt = n(0),
        vt = ["children", "classes", "onClose"],
        Ot = Object(x.a)(function (e) {
          return {
            root: { display: "flex", "& > *": { margin: e.spacing(1) } },
            large: { width: e.spacing(12), height: e.spacing(12) },
            table: { minWidth: 650 },
            headerContainer: {
              paddingTop: e.spacing(1),
              paddingLeft: e.spacing(5),
              paddingRight: e.spacing(1),
            },
          };
        }),
        ft = {
          status: "draft",
          invoiceNumber: "",
          id: "",
          date: new Date(),
          dueDate: new Date(new Date(ut()(new Date(), "DD-MM-YYYY"))),
          subTotal: 0,
          taxAmount: 0,
          taxPercentage: 0,
          discountAmount: 0,
          discountPercentage: 0,
          totalAmount: 0,
          finalAmount: 0,
          invoiceTo: "",
          distributionCenter: { dcId: "", dcName: "" },
          items: [
            {
              number: 0,
              name: "",
              type: "",
              detailType: "",
              amount: 0,
              dropdown: !1,
            },
          ],
          vendorDetails: {
            id: "",
            email: "",
            role: "",
            firstName: " ",
            lastName: "",
            active: 0,
            restricted: 0,
          },
        },
        gt = Object(v.a)(function (e) {
          return {
            root: {
              margin: 0,
              padding: e.spacing(2),
              backgroundColor: "#1976D2",
              marginLeft: 0,
            },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: "white",
            },
          };
        })(function (e) {
          var t = e.children,
            n = e.classes,
            a = e.onClose,
            r = Object(b.a)(e, vt);
          return Object(xt.jsxs)(
            V.a,
            Object(j.a)(
              Object(j.a)({ disableTypography: !0, className: n.root }, r),
              {},
              {
                children: [
                  Object(xt.jsx)(O.a, { variant: "h6", children: t }),
                  a
                    ? Object(xt.jsx)(f.a, {
                        "aria-label": "close",
                        className: n.closeButton,
                        onClick: a,
                        children: Object(xt.jsx)(mt.a, {}),
                      })
                    : null,
                ],
              }
            )
          );
        }),
        yt = function () {
          var e = Object(l.g)(),
            t = Ot(),
            n = Object(l.h)(),
            r = Object(p.b)(),
            c = Object(a.useState)(
              "vendor" === ee.user.role ? ee.user.externalData.dcIds : ""
            ),
            i = Object(o.a)(c, 2),
            s = i[0],
            b = i[1],
            x = Object(d.b)(),
            v = Object(o.a)(x, 1)[0],
            E = Object(l.i)().id,
            V = Object(p.c)(function (e) {
              return e.invoices.itemList;
            }),
            W = Object(p.c)(function (e) {
              return e.invoices.userList;
            }),
            Y = Object(p.c)(function (e) {
              return e.invoices.dcids;
            }),
            M = Object(p.c)(function (e) {
              return e.invoices.invoices;
            }),
            q = Object(a.useState)({}),
            $ = Object(o.a)(q, 2),
            Q = $[0],
            X = $[1],
            Z = Object(a.useState)(),
            te = Object(o.a)(Z, 2),
            ae = te[0],
            re = te[1],
            ce = Object(a.useState)(ft),
            ie = Object(o.a)(ce, 2),
            se = ie[0],
            de = ie[1],
            ue = Object(a.useState)(!1),
            je = Object(o.a)(ue, 2),
            be = je[0],
            pe = je[1],
            he = Object(a.useState)(""),
            me = Object(o.a)(he, 2),
            xe = me[0],
            ve = me[1],
            Oe = Object(a.useState)(""),
            fe = Object(o.a)(Oe, 2),
            ye = fe[0],
            we = fe[1],
            Ce = [
              {
                name: "N15",
                date: ut()(M.date).add(15, "days").utc().format(),
              },
              {
                name: "N30",
                date: ut()(M.date).add(30, "days").utc().format(),
              },
            ],
            Ie = n.pathname.includes("edit")
              ? M.vendorId &&
                M.vendorId.externalData &&
                M.vendorId.externalData.id
              : W.id,
            _e = W.filter(function (e) {
              return Ie === e.id;
            });
          Object(a.useEffect)(
            function () {
              var e, t, n, a, r, c, i, o;
              se.vendorDetails = {
                id: null === (e = _e[0]) || void 0 === e ? void 0 : e.id,
                email: null === (t = _e[0]) || void 0 === t ? void 0 : t.email,
                role: null === (n = _e[0]) || void 0 === n ? void 0 : n.urole,
                firstName:
                  null === (a = _e[0]) || void 0 === a ? void 0 : a.first_name,
                lastName:
                  null === (r = _e[0]) || void 0 === r ? void 0 : r.last_name,
                active:
                  null === (c = _e[0]) || void 0 === c ? void 0 : c.active,
                restricted:
                  null === (i = _e[0]) || void 0 === i ? void 0 : i.restricted,
                dcIds: null === (o = _e[0]) || void 0 === o ? void 0 : o.dc_ids,
              };
            },
            [se, _e]
          ),
            Object(a.useEffect)(
              function () {
                n.pathname.includes("add") ||
                  r(
                    (function (e) {
                      return (function () {
                        var t = Object(J.a)(
                          K.a.mark(function t(n) {
                            var a, r, c, i;
                            return K.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        n({ type: Ne }),
                                        (t.next = 4),
                                        oe(e)
                                      );
                                    case 4:
                                      (a = t.sent),
                                        (r = a.data),
                                        n({ type: We, payload: r }),
                                        n({ type: De }),
                                        (t.next = 14);
                                      break;
                                    case 10:
                                      (t.prev = 10),
                                        (t.t0 = t.catch(0)),
                                        401 ===
                                          (null === t.t0 ||
                                          void 0 === t.t0 ||
                                          null === (c = t.t0.response) ||
                                          void 0 === c ||
                                          null === (i = c.data) ||
                                          void 0 === i
                                            ? void 0
                                            : i.code) &&
                                          (localStorage.removeItem("profile"),
                                          window.location.reload()),
                                        console.log(t.t0.response);
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 10]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(E)
                  ),
                  r(ot()),
                  de(ft);
              },
              [r, E, n.pathname]
            ),
            Object(a.useEffect)(
              function () {
                var e = { dcIds: s };
                "" !== e.dcIds &&
                  r(
                    (function (e) {
                      return (function () {
                        var t = Object(J.a)(
                          K.a.mark(function t(n) {
                            var a, r, c, i;
                            return K.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.prev = 0), (t.next = 3), ge(e);
                                    case 3:
                                      (a = t.sent),
                                        (r = a.data),
                                        n({ type: Fe, payload: r }),
                                        (t.next = 12);
                                      break;
                                    case 8:
                                      (t.prev = 8),
                                        (t.t0 = t.catch(0)),
                                        401 ===
                                          (null === t.t0 ||
                                          void 0 === t.t0 ||
                                          null === (c = t.t0.response) ||
                                          void 0 === c ||
                                          null === (i = c.data) ||
                                          void 0 === i
                                            ? void 0
                                            : i.code) &&
                                          (localStorage.removeItem("profile"),
                                          window.location.reload()),
                                        console.log(t.t0);
                                    case 12:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 8]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(e)
                  );
              },
              [s, r]
            ),
            Object(a.useEffect)(
              function () {
                re(
                  n.pathname.includes("edit")
                    ? "EDIT INVOICE"
                    : n.pathname.includes("view")
                    ? "VIEW INVOICE"
                    : "ADD INVOICE"
                ),
                  n.pathname.includes("add") ||
                    (M.items &&
                      M.items.length &&
                      M.items.map(function (e) {
                        return (e.dropdown = !0), 0;
                      }),
                    de(M));
              },
              [M, E, n.pathname]
            ),
            Object(a.useEffect)(
              function () {
                ("admin" !== ee.user.role && "superAdmin" !== ee.user.role) ||
                  r(
                    (function () {
                      var e = Object(J.a)(
                        K.a.mark(function e(t) {
                          var n, a, r, c;
                          return K.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      ne.get(
                                        "/v1/auth/users/list?active=1&role=vendor"
                                      )
                                    );
                                  case 3:
                                    (n = e.sent),
                                      (a = n.data),
                                      t({ type: Ue, payload: a }),
                                      (e.next = 12);
                                    break;
                                  case 8:
                                    (e.prev = 8),
                                      (e.t0 = e.catch(0)),
                                      401 ===
                                        (null === e.t0 ||
                                        void 0 === e.t0 ||
                                        null === (r = e.t0.response) ||
                                        void 0 === r ||
                                        null === (c = r.data) ||
                                        void 0 === c
                                          ? void 0
                                          : c.code) &&
                                        (localStorage.removeItem("profile"),
                                        window.location.reload()),
                                      console.log(e.t0);
                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 8]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              },
              [r]
            );
          var Se = {
              options: V,
              getOptionLabel: function (e) {
                var t;
                return null !== e &&
                  void 0 !== e &&
                  e.customName &&
                  "vendor" ===
                    (null === ee ||
                    void 0 === ee ||
                    null === (t = ee.user) ||
                    void 0 === t
                      ? void 0
                      : t.role)
                  ? null === e || void 0 === e
                    ? void 0
                    : e.customName
                  : null === e || void 0 === e
                  ? void 0
                  : e.name;
              },
            },
            ke = function (e, t) {
              var n = 0;
              e.items.map(function (e) {
                return e.amount && (n += parseFloat(e.amount)), 0;
              }),
                (void 0 === n && "NaN" === n && n === isNaN) ||
                  (t("subTotal", n),
                  t(
                    "totalAmount",
                    parseFloat(
                      n + ((n * parseFloat(e.taxPercentage)) / 100 || 0)
                    )
                  ),
                  t("taxAmount", (n * parseFloat(e.taxPercentage)) / 100 || 0));
            },
            Te = function (e) {
              var t = e.target.files;
              t && t[0] && X(t[0]);
            },
            Pe = {
              options: W,
              getOptionLabel: function (e) {
                return e.first_name || e.firstName;
              },
            },
            Ae = {
              options: Y,
              getOptionLabel: function (e) {
                return e.dc_name || e.dcName;
              },
            },
            Be = {
              options: Ce,
              getOptionLabel: function (e) {
                return e.name;
              },
            },
            Re = function (e) {
              ve(e), pe(!0);
            },
            Ve = function () {
              pe(!1),
                r(
                  (function (e, t, n) {
                    return (function () {
                      var a = Object(J.a)(
                        K.a.mark(function a(r) {
                          var c, i, o, s;
                          return K.a.wrap(
                            function (a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    return (
                                      (a.prev = 0),
                                      (a.next = 3),
                                      (l = e._id),
                                      (d = e.status),
                                      (u = e.reason),
                                      "admin" === ee.user.role
                                        ? ne.patch("/v1/admin/invoice", {
                                            _id: l,
                                            adminStatus: d,
                                            reason: u,
                                          })
                                        : "accountant" === ee.user.role
                                        ? ne.patch("/v1/accountant/invoice", {
                                            _id: l,
                                            accountantStatus: d,
                                            reason: u,
                                          })
                                        : "siteManager" === ee.user.role
                                        ? ne.patch("/v1/manager/invoice", {
                                            _id: l,
                                            managerStatus: d,
                                            reason: u,
                                          })
                                        : "superAdmin" === ee.user.role
                                        ? ne.patch("/v1/superAdmin/invoice", {
                                            _id: l,
                                            superAdminStatus: d,
                                            reason: u,
                                          })
                                        : void 0
                                    );
                                  case 3:
                                    (c = a.sent),
                                      (i = c.data),
                                      r({ type: He, payload: i }),
                                      n.push("/invoices"),
                                      t("Invoice ".concat(e.status)),
                                      (a.next = 14);
                                    break;
                                  case 10:
                                    (a.prev = 10),
                                      (a.t0 = a.catch(0)),
                                      401 ===
                                        (null === a.t0 ||
                                        void 0 === a.t0 ||
                                        null === (o = a.t0.response) ||
                                        void 0 === o ||
                                        null === (s = o.data) ||
                                        void 0 === s
                                          ? void 0
                                          : s.code) &&
                                        (localStorage.removeItem("profile"),
                                        window.location.reload()),
                                      t(a.t0.response.data.message);
                                  case 14:
                                  case "end":
                                    return a.stop();
                                }
                              var l, d, u;
                            },
                            a,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (e) {
                        return a.apply(this, arguments);
                      };
                    })();
                  })({ _id: se.id, status: xe, reason: ye }, v, e)
                );
            };
          return Object(xt.jsx)("div", {
            className: bt.a.invoiceLayout,
            children: Object(xt.jsx)(h.c, {
              initialValues: Object(j.a)({}, se),
              onSubmit: function (t, a) {
                var c = a.setSubmitting;
                (t.discountAmount = parseInt(0)),
                  (t.discountPercentage = parseInt(0)),
                  (t.finalAmount = t.totalAmount),
                  (t.invoiceTo = "62038d6d2ea0da119bd32c77");
                var i = {};
                (t.items = t.items.map(function (e) {
                  return (
                    delete e.id,
                    delete e.dropdown,
                    Object(j.a)(Object(j.a)({}, i), e)
                  );
                })),
                  "vendor" === ee.user.role &&
                    (t.vendorDetails = {
                      id: ee.user.externalData.id,
                      email: ee.user.email,
                      role: ee.user.role,
                      firstName: ee.user.externalData.firstName,
                      lastName: ee.user.externalData.lastName,
                      active: ee.user.externalData.active,
                      restricted: ee.user.externalData.restricted,
                      dcIds: ee.user.externalData.dcIds,
                    }),
                  delete t.invoiceNumber,
                  delete t.managerStatus,
                  delete t.adminStatus,
                  delete t.superAdminStatus,
                  delete t.accountantStatus,
                  delete t.isInvoiceModified,
                  delete t.createdBy,
                  delete t.modifiedBy,
                  n.pathname.includes("edit")
                    ? (delete t.activity,
                      delete t.vendorId,
                      r(
                        (function (e, t, n) {
                          return (function () {
                            var n = Object(J.a)(
                              K.a.mark(function n(a) {
                                var r, c, i, o;
                                return K.a.wrap(
                                  function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.prev = 0),
                                            (n.next = 3),
                                            (s = e),
                                            ne.patch("/v1/invoice", s)
                                          );
                                        case 3:
                                          (r = n.sent),
                                            (c = r.data),
                                            a({ type: Ee, payload: c }),
                                            t.push("/invoices"),
                                            (n.next = 13);
                                          break;
                                        case 9:
                                          (n.prev = 9),
                                            (n.t0 = n.catch(0)),
                                            401 ===
                                              (null === n.t0 ||
                                              void 0 === n.t0 ||
                                              null === (i = n.t0.response) ||
                                              void 0 === i ||
                                              null === (o = i.data) ||
                                              void 0 === o
                                                ? void 0
                                                : o.code) &&
                                              (localStorage.removeItem(
                                                "profile"
                                              ),
                                              window.location.reload()),
                                            console.log(n.t0);
                                        case 13:
                                        case "end":
                                          return n.stop();
                                      }
                                    var s;
                                  },
                                  n,
                                  null,
                                  [[0, 9]]
                                );
                              })
                            );
                            return function (e) {
                              return n.apply(this, arguments);
                            };
                          })();
                        })(t, e)
                      ))
                    : (delete t.id,
                      r(
                        (function (e, t, n) {
                          return (function () {
                            var a = Object(J.a)(
                              K.a.mark(function a(r) {
                                var c, i, o, s, l, d;
                                return K.a.wrap(
                                  function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return (
                                            (a.prev = 0),
                                            r({ type: Ne }),
                                            (a.next = 4),
                                            le(e)
                                          );
                                        case 4:
                                          (c = a.sent),
                                            (i = c.data),
                                            r({ type: Le, payload: i }),
                                            n("Invoice Created"),
                                            t.push("/invoices"),
                                            r({ type: De }),
                                            (a.next = 16);
                                          break;
                                        case 12:
                                          (a.prev = 12),
                                            (a.t0 = a.catch(0)),
                                            401 ===
                                              (null === a.t0 ||
                                              void 0 === a.t0 ||
                                              null === (o = a.t0.response) ||
                                              void 0 === o ||
                                              null === (s = o.data) ||
                                              void 0 === s
                                                ? void 0
                                                : s.code) &&
                                              (localStorage.removeItem(
                                                "profile"
                                              ),
                                              window.location.reload()),
                                            n(
                                              null === a.t0 ||
                                                void 0 === a.t0 ||
                                                null === (l = a.t0.response) ||
                                                void 0 === l ||
                                                null === (d = l.data) ||
                                                void 0 === d
                                                ? void 0
                                                : d.message
                                            );
                                        case 16:
                                        case "end":
                                          return a.stop();
                                      }
                                  },
                                  a,
                                  null,
                                  [[0, 12]]
                                );
                              })
                            );
                            return function (e) {
                              return a.apply(this, arguments);
                            };
                          })();
                        })(t, e, v)
                      )),
                  c(!1);
              },
              validationSchema: wt,
              enableReinitialize: !0,
              children: function (a) {
                var r,
                  c = a.values,
                  i = a.errors,
                  o = a.touched,
                  s = (a.handleBlur, a.handleSubmit),
                  l = a.handleChange,
                  d = a.setFieldValue;
                return Object(xt.jsxs)(h.b, {
                  noValidate: !0,
                  autoComplete: "off",
                  onSubmit: s,
                  className: "mu-form",
                  children: [
                    Object(xt.jsxs)(g.a, {
                      container: !0,
                      spacing: 2,
                      children: [
                        Object(xt.jsx)(g.a, { item: !0, xs: 6 }),
                        Object(xt.jsxs)(g.a, {
                          item: !0,
                          xs: 6,
                          children: [
                            Object(xt.jsx)("h3", { children: ae }),
                            Object(xt.jsx)("br", {}),
                            !n.pathname.includes("add") &&
                              Object(xt.jsxs)("span", {
                                style: { float: "right" },
                                children: [
                                  "Invoice #:",
                                  Object(xt.jsxs)("div", {
                                    style: {
                                      margin: "15px 5px",
                                      padding: "8px",
                                      display: "inline-block",
                                      backgroundColor: "#f4f4f4",
                                      outline: "0px solid transparent",
                                    },
                                    children: [
                                      Object(xt.jsx)("span", {
                                        style: {
                                          color: "black",
                                          padding: "15px",
                                        },
                                        children: c.invoiceNumber,
                                      }),
                                      Object(xt.jsx)("br", {}),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    Object(xt.jsx)(y.a, {}),
                    Object(xt.jsxs)(g.a, {
                      container: !0,
                      spacing: 2,
                      children: [
                        Object(xt.jsxs)(g.a, {
                          item: !0,
                          xs: 6,
                          children: [
                            Object(xt.jsx)(g.a, {
                              item: !0,
                              style: {
                                paddingTop: "25px",
                                paddingBottom: "25px",
                              },
                            }),
                            n.pathname.includes("view")
                              ? Object(xt.jsx)(xt.Fragment, {})
                              : Object(xt.jsxs)(xt.Fragment, {
                                  children: [
                                    Object(xt.jsx)(O.a, {
                                      variant: "overline",
                                      style:
                                        i.dueDate && o.dueDate
                                          ? { color: "#f44336" }
                                          : { color: "gray" },
                                      gutterBottom: !0,
                                      children: "Select Due Date",
                                    }),
                                    Object(xt.jsx)(O.a, {
                                      variant: "body2",
                                      gutterBottom: !0,
                                      children: Object(xt.jsx)(g.a, {
                                        item: !0,
                                        style: { width: 270, marginRight: 10 },
                                        children: Object(xt.jsx)(
                                          m.a,
                                          Object(j.a)(
                                            Object(j.a)(
                                              {
                                                id: "dueDate",
                                                name: "dueDate",
                                              },
                                              Be
                                            ),
                                            {},
                                            {
                                              onChange: function (e, t) {
                                                d("dueDate", t.date);
                                              },
                                              renderInput: function (e) {
                                                return Object(xt.jsx)(
                                                  w.a,
                                                  Object(j.a)({}, e)
                                                );
                                              },
                                            }
                                          )
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                            ("admin" === ee.user.role ||
                              "superAdmin" === ee.user.role) &&
                              !n.pathname.includes("view") &&
                              Object(xt.jsxs)(xt.Fragment, {
                                children: [
                                  Object(xt.jsx)(O.a, {
                                    variant: "overline",
                                    style: { color: "gray" },
                                    gutterBottom: !0,
                                    children: "Select Vendor",
                                  }),
                                  Object(xt.jsx)(O.a, {
                                    variant: "body2",
                                    gutterBottom: !0,
                                    children: Object(xt.jsx)(g.a, {
                                      item: !0,
                                      style: { width: 270, marginRight: 10 },
                                      children: Object(xt.jsx)(
                                        m.a,
                                        Object(j.a)(
                                          Object(j.a)(
                                            {
                                              id: "debug",
                                              debug: !0,
                                              placeholder: "select vendor",
                                              renderInput: function (e) {
                                                return Object(xt.jsx)(
                                                  w.a,
                                                  Object(j.a)({}, e)
                                                );
                                              },
                                            },
                                            Pe
                                          ),
                                          {},
                                          {
                                            value: c.vendorDetails
                                              ? c.vendorDetails
                                              : null,
                                            onChange: function (e, t) {
                                              d("vendorDetails", {
                                                id:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.id,
                                                email:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.email,
                                                role:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.urole,
                                                firstName:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.first_name,
                                                lastName:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.last_name,
                                                active:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.active,
                                                restricted:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.restricted,
                                                dcIds:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.dc_ids,
                                              }),
                                                b(
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.dc_ids
                                                );
                                            },
                                          }
                                        )
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            n.pathname.includes("view")
                              ? Object(xt.jsx)(xt.Fragment, {})
                              : Object(xt.jsxs)(xt.Fragment, {
                                  children: [
                                    Object(xt.jsx)(O.a, {
                                      variant: "overline",
                                      style: { color: "gray" },
                                      gutterBottom: !0,
                                      children: "Select Dc id",
                                    }),
                                    Object(xt.jsx)(O.a, {
                                      variant: "body2",
                                      gutterBottom: !0,
                                      children: Object(xt.jsx)(g.a, {
                                        item: !0,
                                        style: { width: 270, marginRight: 10 },
                                        children: Object(xt.jsx)(
                                          m.a,
                                          Object(j.a)(
                                            Object(j.a)(
                                              {
                                                id: "debug",
                                                debug: !0,
                                                renderInput: function (e) {
                                                  return Object(xt.jsx)(
                                                    w.a,
                                                    Object(j.a)({}, e)
                                                  );
                                                },
                                              },
                                              Ae
                                            ),
                                            {},
                                            {
                                              value:
                                                c.distributionCenter &&
                                                "" !== c.distributionCenter.dcId
                                                  ? c.distributionCenter
                                                  : Y,
                                              onChange: function (e, t) {
                                                d("distributionCenter", {
                                                  dcId:
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.id,
                                                  dcName:
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.dc_name,
                                                });
                                              },
                                            }
                                          )
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                          ],
                        }),
                        Object(xt.jsxs)(g.a, {
                          item: !0,
                          xs: 6,
                          style: { textAlign: "right" },
                          children: [
                            Object(xt.jsx)(O.a, {
                              variant: "overline",
                              style: { color: "gray" },
                              gutterBottom: !0,
                              children: "Status",
                            }),
                            Object(xt.jsx)(O.a, {
                              variant: "h6",
                              gutterBottom: !0,
                              style: {
                                color: "Receipt" === ae ? "green" : "red",
                              },
                              children: c.status,
                            }),
                            Object(xt.jsx)(O.a, {
                              variant: "overline",
                              style: { color: "gray" },
                              gutterBottom: !0,
                              children: "Date",
                            }),
                            Object(xt.jsx)(O.a, {
                              variant: "body2",
                              gutterBottom: !0,
                              children: ut()(se.date).format("MMM Do YYYY"),
                            }),
                            Object(xt.jsx)(O.a, {
                              variant: "overline",
                              style: { color: "gray" },
                              gutterBottom: !0,
                              children: "Due Date",
                            }),
                            Object(xt.jsx)(O.a, {
                              variant: "body2",
                              gutterBottom: !0,
                              children:
                                "" === c.dueDate
                                  ? "-"
                                  : ut()(c.dueDate).format("MMM Do YYYY"),
                            }),
                            Object(xt.jsx)(O.a, {
                              variant: "overline",
                              gutterBottom: !0,
                              children: "Amount",
                            }),
                            Object(xt.jsxs)(O.a, {
                              variant: "h6",
                              gutterBottom: !0,
                              children: [
                                "$",
                                c.totalAmount
                                  ? pt(c.totalAmount.toFixed(2))
                                  : 0,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(xt.jsx)(g.a, {
                      item: !0,
                      style: { paddingTop: "25px", paddingBottom: "25px" },
                      children: Object(xt.jsx)(y.a, {}),
                    }),
                    Object(xt.jsx)(g.a, {
                      item: !0,
                      xs: 12,
                      children: Object(xt.jsx)(C.a, {
                        component: I.a,
                        className: "tb-container",
                        children: Object(xt.jsxs)(_.a, {
                          className: t.table,
                          "aria-label": "simple table",
                          children: [
                            Object(xt.jsx)(S.a, {
                              children: Object(xt.jsxs)(k.a, {
                                children: [
                                  Object(xt.jsx)(N.a, { children: "Number" }),
                                  Object(xt.jsx)(N.a, { children: "Name" }),
                                  Object(xt.jsx)(N.a, { children: "Type" }),
                                  Object(xt.jsx)(N.a, {
                                    children: "Details Type",
                                  }),
                                  Object(xt.jsx)(N.a, { children: "Amount" }),
                                  n.pathname.includes("view")
                                    ? null
                                    : Object(xt.jsx)(N.a, {
                                        colSpan: 2,
                                        align: "center",
                                        children: "Action",
                                      }),
                                ],
                              }),
                            }),
                            Object(xt.jsx)(D.a, {
                              children: Object(xt.jsx)(h.a, {
                                name: "items",
                                render: function (e, t) {
                                  return Object(xt.jsxs)(xt.Fragment, {
                                    children: [
                                      c.items && c.items.length > 0
                                        ? c.items.map(function (t, a) {
                                            var r, s, u, b, p, h, x, v, O, g, y;
                                            return Object(xt.jsxs)(
                                              k.a,
                                              {
                                                children: [
                                                  Object(xt.jsx)(N.a, {
                                                    scope: "row",
                                                    width: "15%",
                                                    children: Object(xt.jsx)(
                                                      T.a,
                                                      {
                                                        sx: { ml: 1, flex: 1 },
                                                        value:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (r = c.items[a]) ||
                                                          void 0 === r
                                                            ? void 0
                                                            : r.number,
                                                        onChange: l,
                                                        name: "items.".concat(
                                                          a,
                                                          ".number"
                                                        ),
                                                        placeholder: "0",
                                                        disabled:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (s = c.items[a]) ||
                                                          void 0 === s
                                                            ? void 0
                                                            : s.dropdown,
                                                      }
                                                    ),
                                                  }),
                                                  Object(xt.jsx)(N.a, {
                                                    width: "35%",
                                                    children:
                                                      null !== c &&
                                                      void 0 !== c &&
                                                      null !==
                                                        (u = c.items[a]) &&
                                                      void 0 !== u &&
                                                      u.dropdown
                                                        ? Object(xt.jsx)(
                                                            "label",
                                                            {
                                                              style: {
                                                                float: "left",
                                                              },
                                                              children:
                                                                null !== c &&
                                                                void 0 !== c &&
                                                                null !==
                                                                  (b =
                                                                    c.items[
                                                                      a
                                                                    ]) &&
                                                                void 0 !== b &&
                                                                b.customName &&
                                                                "vendor" ===
                                                                  ee.user.role
                                                                  ? null ===
                                                                      c ||
                                                                    void 0 ===
                                                                      c ||
                                                                    null ===
                                                                      (p =
                                                                        c.items[
                                                                          a
                                                                        ]) ||
                                                                    void 0 === p
                                                                    ? void 0
                                                                    : p.customName
                                                                  : null ===
                                                                      c ||
                                                                    void 0 ===
                                                                      c ||
                                                                    null ===
                                                                      (h =
                                                                        c.items[
                                                                          a
                                                                        ]) ||
                                                                    void 0 === h
                                                                  ? void 0
                                                                  : h.name,
                                                            }
                                                          )
                                                        : Object(xt.jsx)(
                                                            xt.Fragment,
                                                            {
                                                              children: Object(
                                                                xt.jsx
                                                              )(
                                                                m.a,
                                                                Object(j.a)(
                                                                  Object(j.a)(
                                                                    {},
                                                                    Se
                                                                  ),
                                                                  {},
                                                                  {
                                                                    id: "debug",
                                                                    debug: !0,
                                                                    renderInput:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return Object(
                                                                          xt.jsx
                                                                        )(
                                                                          w.a,
                                                                          Object(
                                                                            j.a
                                                                          )(
                                                                            {},
                                                                            e
                                                                          )
                                                                        );
                                                                      },
                                                                    value: V.id,
                                                                    name: "items.".concat(
                                                                      a,
                                                                      ".name"
                                                                    ),
                                                                    onBlur:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        d(
                                                                          "items.".concat(
                                                                            a,
                                                                            ".name"
                                                                          ),
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                      },
                                                                    style:
                                                                      i.items &&
                                                                        i.items[
                                                                          a
                                                                        ] &&
                                                                        i.items[
                                                                          a
                                                                        ]
                                                                          .name &&
                                                                        o.items &&
                                                                        o.items[
                                                                          a
                                                                        ] &&
                                                                        o.items[
                                                                          a
                                                                        ]
                                                                          .name && {
                                                                          borderBottom:
                                                                            "1px solid red",
                                                                        },
                                                                    onChange:
                                                                      function (
                                                                        e,
                                                                        t
                                                                      ) {
                                                                        d(
                                                                          "items.".concat(
                                                                            a
                                                                          ),
                                                                          Object(
                                                                            j.a
                                                                          )(
                                                                            Object(
                                                                              j.a
                                                                            )(
                                                                              {},
                                                                              t
                                                                            ),
                                                                            {},
                                                                            {
                                                                              dropdown:
                                                                                !0,
                                                                            }
                                                                          )
                                                                        );
                                                                      },
                                                                  }
                                                                )
                                                              ),
                                                            }
                                                          ),
                                                  }),
                                                  Object(xt.jsx)(N.a, {
                                                    width: "30%",
                                                    children: Object(xt.jsx)(
                                                      T.a,
                                                      {
                                                        style: {
                                                          width: "max-content",
                                                        },
                                                        onChange: l,
                                                        sx: { ml: 1, flex: 1 },
                                                        value:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (x = c.items[a]) ||
                                                          void 0 === x
                                                            ? void 0
                                                            : x.type,
                                                        name: "items.".concat(
                                                          a,
                                                          ".type"
                                                        ),
                                                        min: 1,
                                                        disabled:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (v = c.items[a]) ||
                                                          void 0 === v
                                                            ? void 0
                                                            : v.dropdown,
                                                        placeholder: "0",
                                                      }
                                                    ),
                                                  }),
                                                  Object(xt.jsx)(N.a, {
                                                    children: Object(xt.jsx)(
                                                      T.a,
                                                      {
                                                        style: {
                                                          width: "max-content",
                                                        },
                                                        sx: { ml: 1, flex: 1 },
                                                        onChange: l,
                                                        value:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (O = c.items[a]) ||
                                                          void 0 === O
                                                            ? void 0
                                                            : O.detailType,
                                                        name: "items.".concat(
                                                          a,
                                                          ".detailType"
                                                        ),
                                                        min: 1,
                                                        disabled:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (g = c.items[a]) ||
                                                          void 0 === g
                                                            ? void 0
                                                            : g.dropdown,
                                                        placeholder: "0",
                                                      }
                                                    ),
                                                  }),
                                                  Object(xt.jsx)(N.a, {
                                                    width: "10%",
                                                    children: Object(xt.jsx)(
                                                      T.a,
                                                      {
                                                        sx: { ml: 1, flex: 1 },
                                                        type: "number",
                                                        onChange: function (e) {
                                                          d(
                                                            "items.".concat(
                                                              a,
                                                              ".amount"
                                                            ),
                                                            e.target.value
                                                          );
                                                        },
                                                        placeholder: "0",
                                                        InputProps: {
                                                          inputProps: {
                                                            min: 0,
                                                          },
                                                        },
                                                        onBlur: function () {
                                                          return ke(c, d);
                                                        },
                                                        name: "items.".concat(
                                                          a,
                                                          ".amount"
                                                        ),
                                                        value:
                                                          null === c ||
                                                          void 0 === c ||
                                                          null ===
                                                            (y = c.items[a]) ||
                                                          void 0 === y
                                                            ? void 0
                                                            : y.amount,
                                                        disabled:
                                                          !!n.pathname.includes(
                                                            "view"
                                                          ),
                                                        style: i.items &&
                                                          i.items[a] &&
                                                          i.items[a].amount &&
                                                          o.items &&
                                                          o.items[a] &&
                                                          o.items[a].amount && {
                                                            borderBottom:
                                                              "1px solid red",
                                                          },
                                                      }
                                                    ),
                                                  }),
                                                  n.pathname.includes("view")
                                                    ? null
                                                    : Object(xt.jsx)(
                                                        xt.Fragment,
                                                        {
                                                          children: Object(
                                                            xt.jsx
                                                          )(N.a, {
                                                            align: "right",
                                                            children: Object(
                                                              xt.jsx
                                                            )(f.a, {
                                                              onClick:
                                                                function (t) {
                                                                  e.remove(a),
                                                                    delete c
                                                                      .items[a],
                                                                    ke(c, d);
                                                                },
                                                              children: Object(
                                                                xt.jsx
                                                              )(G.a, {
                                                                style: {
                                                                  width: "20px",
                                                                  height:
                                                                    "20px",
                                                                },
                                                              }),
                                                            }),
                                                          }),
                                                        }
                                                      ),
                                                ],
                                              },
                                              a
                                            );
                                          })
                                        : Object(xt.jsx)(xt.Fragment, {}),
                                      !n.pathname.includes("view") &&
                                        Object(xt.jsxs)(P.a, {
                                          style: {
                                            color: "#fff",
                                            background: "rgb(25, 118, 210)",
                                            margin: "2%",
                                          },
                                          onClick: function () {
                                            e.push(ft.items[0]);
                                          },
                                          children: [
                                            "Add Item",
                                            Object(xt.jsx)(R.a, {}),
                                          ],
                                        }),
                                    ],
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    !n.pathname.includes("view") &&
                      Object(xt.jsxs)("div", {
                        children: [
                          Object(xt.jsxs)(g.a, {
                            container: !0,
                            item: !0,
                            style: {
                              paddingTop: "25px",
                              paddingBottom: "25px",
                            },
                            children: [
                              Object(xt.jsx)("input", {
                                style: { display: "none" },
                                id: "contained-button-file",
                                type: "file",
                                onChange: Te,
                              }),
                              Object(xt.jsx)("label", {
                                htmlFor: "contained-button-file",
                                children: Object(xt.jsx)(P.a, {
                                  variant: "contained",
                                  color: "primary",
                                  component: "span",
                                  style: { marginLeft: "5px" },
                                  children: "Upload",
                                }),
                              }),
                              Object(xt.jsx)(P.a, {
                                variant: "contained",
                                color: "default",
                                onClick: function () {
                                  return (function (e, t) {
                                    var n = new FileReader(),
                                      a = !!n.readAsBinaryString;
                                    (n.onload = function (n) {
                                      var r = n.target.result,
                                        c = lt.a.read(r, {
                                          type: a ? "binary" : "array",
                                          bookVBA: !0,
                                        }),
                                        i = c.SheetNames[0],
                                        o = c.Sheets[i],
                                        s = lt.a.utils.sheet_to_json(o);
                                      s.map(function (e) {
                                        return (
                                          (e.amount = parseFloat(e.Amount)),
                                          (e.name = e.Name),
                                          (e.type = e.Type),
                                          (e.detailType = e["Detail Type"]),
                                          (e.number = parseFloat(e.Number)),
                                          (e.dropdown = !0),
                                          delete e.Name,
                                          delete e["Detail Type"],
                                          delete e.Number,
                                          delete e.Type,
                                          delete e.Amount,
                                          0
                                        );
                                      }),
                                        (t.items = [].concat(
                                          Object(u.a)(t.items),
                                          Object(u.a)(s)
                                        )),
                                        t.items.forEach(function (e, n) {
                                          !1 === e.dropdown &&
                                            t.items.splice(n, 1);
                                        }),
                                        e("items", t.items),
                                        ke(t, e);
                                    }),
                                      a
                                        ? n.readAsBinaryString(Q)
                                        : n.readAsArrayBuffer(Q);
                                  })(d, c);
                                },
                                style: { marginLeft: "5px" },
                                disabled: !Q.name,
                                children: "add",
                              }),
                            ],
                          }),
                          Object(xt.jsx)("label", {
                            children: Q && Q.name ? Q.name : "",
                          }),
                        ],
                      }),
                    Object(xt.jsxs)("div", {
                      className: bt.a.invoiceSummary,
                      children: [
                        Object(xt.jsx)("div", {
                          className: bt.a.summary,
                          children: "Invoice Summary",
                        }),
                        Object(xt.jsxs)("div", {
                          className: bt.a.summaryItem,
                          children: [
                            Object(xt.jsx)("p", { children: "Sub total:" }),
                            Object(xt.jsx)("h4", {
                              children: parseInt(c.subTotal).toFixed(2),
                            }),
                          ],
                        }),
                        Object(xt.jsxs)("div", {
                          className: bt.a.summaryItem,
                          children: [
                            Object(xt.jsx)("p", {
                              children: "Tax Percentage (%):",
                            }),
                            Object(xt.jsx)("h4", {
                              children: Object(xt.jsx)(w.a, {
                                type: "number",
                                InputProps: { inputProps: { min: 0 } },
                                name: "taxPercentage",
                                id: "taxPercentage",
                                value: c.taxPercentage,
                                onChange: l,
                                style: i.taxPercentage &&
                                  o.taxPercentage && {
                                    borderBottom: "1px solid red",
                                  },
                                disabled: !!n.pathname.includes("view"),
                                onBlur: function (e) {
                                  d("taxPercentage", e.target.value),
                                    d(
                                      "taxAmount",
                                      (e.target.value / 100) * c.subTotal
                                    ),
                                    d(
                                      "totalAmount",
                                      parseFloat(
                                        (e.target.value / 100) * c.subTotal +
                                          parseInt(c.subTotal)
                                      )
                                    );
                                },
                                placeholder: "e.g 10",
                              }),
                            }),
                          ],
                        }),
                        Object(xt.jsxs)("div", {
                          className: bt.a.summaryItem,
                          children: [
                            Object(xt.jsx)("p", { children: "Tax Amount:" }),
                            Object(xt.jsxs)("h4", {
                              children: [
                                "$",
                                parseFloat(c.taxAmount).toFixed(2),
                              ],
                            }),
                          ],
                        }),
                        Object(xt.jsxs)("div", {
                          className: bt.a.summaryItem,
                          children: [
                            Object(xt.jsx)("p", { children: "Total" }),
                            Object(xt.jsxs)("h4", {
                              style: { color: "black", lineHeight: "8px" },
                              children: [
                                "$",
                                c.totalAmount
                                  ? pt(c.totalAmount.toFixed(2))
                                  : 0,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.pathname.includes("view") &&
                      Object(xt.jsxs)(A.a, {
                        children: [
                          Object(xt.jsx)(B.a, {
                            expandIcon: Object(xt.jsx)(z.a, {}),
                            "aria-controls": "panel1bh-content",
                            id: "panel1bh-header",
                            children: "Activities",
                          }),
                          Object(xt.jsx)(F.a, {
                            children: Object(xt.jsxs)(_.a, {
                              children: [
                                Object(xt.jsx)(S.a, {
                                  children: Object(xt.jsxs)(k.a, {
                                    children: [
                                      Object(xt.jsx)(N.a, {
                                        align: "center",
                                        children: "Date",
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        align: "center",
                                        children: "Action",
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        align: "center",
                                        children: "Role",
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        align: "center",
                                        children: "Reason",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(xt.jsx)(D.a, {
                                  children:
                                    null === c ||
                                    void 0 === c ||
                                    null === (r = c.activity) ||
                                    void 0 === r
                                      ? void 0
                                      : r.map(function (e) {
                                          return Object(xt.jsxs)(k.a, {
                                            children: [
                                              Object(xt.jsx)(N.a, {
                                                align: "center",
                                                children: ut()(
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.action_date
                                                ).format("DD-MM-YYYY hh:mm a"),
                                              }),
                                              Object(xt.jsx)(N.a, {
                                                align: "center",
                                                children:
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.action_type,
                                              }),
                                              Object(xt.jsx)(N.a, {
                                                align: "center",
                                                children:
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.role,
                                              }),
                                              Object(xt.jsx)(N.a, {
                                                align: "center",
                                                children: e.reason
                                                  ? e.reason
                                                  : "-",
                                              }),
                                            ],
                                          });
                                        }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    n.pathname.includes("view") &&
                    "vendor" !== ee.user.role &&
                    "unpaid" === se.status &&
                    (("siteManager" === ee.user.role &&
                      "pending" === se.managerStatus) ||
                      ("superAdmin" === ee.user.role &&
                        "pending" === se.superAdminStatus) ||
                      ("admin" === ee.user.role &&
                        "pending" === se.adminStatus) ||
                      ("accountant" === ee.user.role &&
                        "pending" === se.accountantStatus))
                      ? Object(xt.jsxs)(g.a, {
                          container: !0,
                          justifyContent: "space-between",
                          style: { margin: "10px" },
                          children: [
                            Object(xt.jsx)(g.a, {}),
                            Object(xt.jsxs)(g.a, {
                              item: !0,
                              children: [
                                "admin" === ee.user.role ||
                                "superAdmin" === ee.user.role
                                  ? Object(xt.jsx)(P.a, {
                                      variant: "contained",
                                      style: {
                                        justifyContentContent: "center",
                                      },
                                      color: "primary",
                                      size: "large",
                                      className: t.button,
                                      onClick: function () {
                                        Re("approved");
                                      },
                                      children: "Approve and pay",
                                    })
                                  : Object(xt.jsx)(P.a, {
                                      variant: "contained",
                                      style: {
                                        justifyContentContent: "center",
                                      },
                                      color: "primary",
                                      size: "large",
                                      className: t.button,
                                      onClick: function () {
                                        Re("approved");
                                      },
                                      children: "Approve",
                                    }),
                                Object(xt.jsx)(P.a, {
                                  variant: "contained",
                                  style: {
                                    justifyContentContent: "center",
                                    marginLeft: "10px",
                                  },
                                  color: "secondary",
                                  size: "large",
                                  className: t.button,
                                  onClick: function () {
                                    Re("rejected");
                                  },
                                  children: "Reject",
                                }),
                                Object(xt.jsx)(P.a, {
                                  variant: "contained",
                                  style: {
                                    justifyContentContent: "center",
                                    color: "red",
                                    marginLeft: "10px",
                                  },
                                  size: "large",
                                  className: t.button,
                                  onClick: function () {
                                    Re("changeRequest");
                                  },
                                  children: "Change Request",
                                }),
                              ],
                            }),
                            Object(xt.jsx)(g.a, {}),
                            Object(xt.jsx)("form", {
                              children: Object(xt.jsxs)(L.a, {
                                onClose: function () {
                                  return pe(!1);
                                },
                                "aria-labelledby": "customized-dialog-title",
                                open: be,
                                fullWidth: !0,
                                children: [
                                  Object(xt.jsx)(gt, {
                                    id: "customized-dialog-title",
                                    onClose: function () {
                                      return pe(!1);
                                    },
                                    style: {
                                      paddingLeft: "20px",
                                      color: "white",
                                    },
                                    children: "Confirmation",
                                  }),
                                  Object(xt.jsx)(w.a, {
                                    name: "Reason",
                                    label: "Reason",
                                    value: ye,
                                    onChange: function (e) {
                                      return we(e.target.value);
                                    },
                                    style: { margin: "30px" },
                                    required: "approved" !== xe,
                                  }),
                                  Object(xt.jsx)(P.a, {
                                    onClick: Ve,
                                    style: { marginBottom: "10px" },
                                    children: "Submit",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        })
                      : Object(xt.jsx)(xt.Fragment, {}),
                    !n.pathname.includes("view") &&
                      Object(xt.jsx)("div", {
                        className: bt.a.toolBar,
                        children: Object(xt.jsxs)(g.a, {
                          container: !0,
                          justifyContent: "center",
                          children: [
                            Object(xt.jsx)(P.a, {
                              variant: "contained",
                              style: { justifyContentContent: "center" },
                              onClick: function () {
                                d("status", "unpaid");
                              },
                              type: "submit",
                              color: "primary",
                              size: "large",
                              className: t.button,
                              startIcon: Object(xt.jsx)(U.a, {}),
                              children: "Save and Continue",
                            }),
                            "draft" === se.status
                              ? Object(xt.jsx)(P.a, {
                                  variant: "contained",
                                  style: {
                                    justifyContentContent: "center",
                                    margin: "0 10px",
                                  },
                                  onClick: function () {
                                    d("status", "draft");
                                  },
                                  type: "submit",
                                  color: "secondary",
                                  size: "large",
                                  className: t.button,
                                  startIcon: Object(xt.jsx)(H.a, {}),
                                  children: "Save as Draft",
                                })
                              : Object(xt.jsx)(xt.Fragment, {}),
                            Object(xt.jsx)(P.a, {
                              variant: "contained",
                              style: {
                                justifyContentContent: "center",
                                margin: "0 10px",
                              },
                              size: "large",
                              className: t.button,
                              onClick: function () {
                                return e.push("/invoices");
                              },
                              children: "Cancel",
                            }),
                          ],
                        }),
                      }),
                  ],
                });
              },
            }),
          });
        },
        wt = W.d().shape({
          status: W.e().required(),
          date: W.b().when("status", { is: "unpaid", then: W.b().required() }),
          dueDate: W.b().when("status", {
            is: "unpaid",
            then: W.b().required(),
          }),
          items: W.a()
            .of(W.d({}))
            .when("status", {
              is: "unpaid",
              then: W.a()
                .of(
                  W.d({
                    number: W.c().required(),
                    name: W.e().required(),
                    type: W.e().required(),
                    detailType: W.e().required(),
                    amount: W.c().required().min(1),
                  }).required()
                )
                .min(1)
                .required(),
            }),
          taxPercentage: W.c().when("status", {
            is: "unpaid",
            then: W.c().required(),
          }),
        }),
        Ct = n(632),
        It = n(634),
        _t = n(660),
        St = n(633),
        kt = n(136),
        Nt = n.n(kt),
        Dt = n(89),
        Tt = n.n(Dt),
        Pt = n(300),
        At = n.n(Pt),
        Bt = n(301),
        Ft = n.n(Bt),
        Lt =
          (n(224),
          function () {
            var e,
              t = Object(p.b)(),
              n = (Object(l.h)(), Object(l.g)()),
              r = Object(p.c)(function (e) {
                return e.invoices.invoice;
              }),
              c = Object(p.c)(function (e) {
                return e.invoices.isLoading;
              }),
              i = Ft()(At.a),
              s = Object(d.b)(),
              u = Object(o.a)(s, 1)[0],
              j = Object(a.useState)(0),
              b = Object(o.a)(j, 2),
              h = b[0],
              m = b[1],
              x = Object(a.useState)(10),
              v = Object(o.a)(x, 2),
              O = v[0],
              w = v[1];
            ee || n.push("/");
            Object(a.useEffect)(
              function () {
                t(ct(O, h + 1));
              },
              [h, O]
            );
            var I = function (e, n) {
              i.fire({
                title: "Are you sure?",
                text: "Do you want to delete!",
                icon: "error",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm",
              }).then(function (a) {
                a.isConfirmed &&
                  t(
                    (function (e, t) {
                      return (function () {
                        var n = Object(J.a)(
                          K.a.mark(function n(a) {
                            var r, c;
                            return K.a.wrap(
                              function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return (n.prev = 0), (n.next = 3), de(e);
                                    case 3:
                                      a({ type: Re, payload: e }),
                                        t("Invoice deleted successfully"),
                                        a(ct(100, 1)),
                                        (n.next = 12);
                                      break;
                                    case 8:
                                      (n.prev = 8),
                                        (n.t0 = n.catch(0)),
                                        401 ===
                                          (null === n.t0 ||
                                          void 0 === n.t0 ||
                                          null === (r = n.t0.response) ||
                                          void 0 === r ||
                                          null === (c = r.data) ||
                                          void 0 === c
                                            ? void 0
                                            : c.code) &&
                                          (localStorage.removeItem("profile"),
                                          window.location.reload()),
                                        console.log(n.t0.response);
                                    case 12:
                                    case "end":
                                      return n.stop();
                                  }
                              },
                              n,
                              null,
                              [[0, 8]]
                            );
                          })
                        );
                        return function (e) {
                          return n.apply(this, arguments);
                        };
                      })();
                    })(e, n)
                  );
              });
            };
            return Object(xt.jsx)(xt.Fragment, {
              children: Object(xt.jsxs)(Ct.a, {
                style: { marginTop: "75px" },
                children: [
                  Object(xt.jsx)(g.a, {
                    container: !0,
                    justifyContent: "space-between",
                    style: { padding: "2%", backgroundColor: "#fff" },
                    children: Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)("h1", { children: "Invoices" }),
                    }),
                  }),
                  Object(xt.jsx)(y.a, {}),
                  Object(xt.jsx)(C.a, {
                    children: Object(xt.jsxs)(_.a, {
                      "aria-label": "collapsible table",
                      children: [
                        Object(xt.jsx)(S.a, {
                          children: Object(xt.jsxs)(k.a, {
                            children: [
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "180px" },
                                children: "Invoice Number",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Client Name",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Date",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Due Date",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Tax Amount",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Tax Percentage",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Total Amount",
                              }),
                              "vendor" === ee.user.role &&
                                Object(xt.jsxs)(xt.Fragment, {
                                  children: [
                                    Object(xt.jsx)(N.a, {
                                      style: { top: 57, minWidth: "120px" },
                                      children: "Contact",
                                    }),
                                    Object(xt.jsx)(N.a, {
                                      style: { top: 57, minWidth: "120px" },
                                      children: "vendor",
                                    }),
                                  ],
                                }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "320px" },
                                children: "DC ids",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Manager Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Admin Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Accountant Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Managing Admin Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Action",
                              }),
                            ],
                          }),
                        }),
                        Object(xt.jsx)(D.a, {
                          children:
                            (r && r.resultData) || c
                              ? c
                                ? Object(xt.jsx)(k.a, {
                                    sx: { "& > *": { borderBottom: "unset" } },
                                    children: Object(xt.jsx)(N.a, {
                                      scope: "row",
                                      width: 300,
                                      style: { fontSize: 16 },
                                      colSpan:
                                        "vendor" === ee.user.role ? 14 : 16,
                                      align: "center",
                                      children: Object(xt.jsx)(St.a, {
                                        size: 25,
                                        thickness: 4,
                                        sx: { mt: 3, ml: 1 },
                                      }),
                                    }),
                                  })
                                : null === (e = r.resultData) || void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    var t, a, r, c, i, o;
                                    return Object(xt.jsxs)(k.a, {
                                      children: [
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          style: { fontSize: 16 },
                                          width: 300,
                                          children: e.invoiceNumber,
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: "PRP",
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: ut()(e.date).format(
                                            "DD-MM-YYYY"
                                          ),
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: ut()(e.dueDate).format(
                                            "DD-MM-YYYY"
                                          ),
                                        }),
                                        Object(xt.jsxs)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          align: "right",
                                          children: [
                                            "$",
                                            Number(e.taxAmount).toFixed(2),
                                          ],
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          align: "center",
                                          children: e.taxPercentage,
                                        }),
                                        Object(xt.jsxs)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          align: "right",
                                          children: [
                                            "$",
                                            Number(e.totalAmount).toFixed(2),
                                          ],
                                        }),
                                        "vendor" === ee.user.role &&
                                          Object(xt.jsxs)(xt.Fragment, {
                                            children: [
                                              Object(xt.jsx)(N.a, {
                                                scope: "row",
                                                width: 300,
                                                children: Object(xt.jsx)(
                                                  "span",
                                                  {
                                                    title:
                                                      null === e ||
                                                      void 0 === e ||
                                                      null ===
                                                        (t = e.vendorId) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.email,
                                                    children:
                                                      null === e ||
                                                      void 0 === e ||
                                                      null ===
                                                        (a = e.vendorId) ||
                                                      void 0 === a
                                                        ? void 0
                                                        : a.email,
                                                  }
                                                ),
                                              }),
                                              Object(xt.jsx)(N.a, {
                                                scope: "row",
                                                width: 300,
                                                children:
                                                  null === e ||
                                                  void 0 === e ||
                                                  null === (r = e.vendorId) ||
                                                  void 0 === r ||
                                                  null ===
                                                    (c = r.externalData) ||
                                                  void 0 === c ||
                                                  null === (i = c.vendor) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.name,
                                              }),
                                            ],
                                          }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: Object(xt.jsx)("span", {
                                            title: e.distributionCenter.dcId,
                                            children: e.distributionCenter.dcId,
                                          }),
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: e.managerStatus,
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: e.adminStatus,
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: e.accountantStatus,
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: e.superAdminStatus,
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: Object(xt.jsx)(It.a, {
                                            overlap: "rectangular",
                                            style:
                                              ((o = e.status),
                                              "partial" === o
                                                ? {
                                                    border: "solid 0px #1976d2",
                                                    backgroundColor: "#baddff",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "paid" === o
                                                ? {
                                                    border: "solid 0px green",
                                                    backgroundColor: "#a5ffcd",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "unpaid" === o
                                                ? {
                                                    border: "solid 0px red",
                                                    backgroundColor: "#f5ff91",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "approved" === o
                                                ? {
                                                    border: "solid 0px red",
                                                    backgroundColor: "#91faff",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "rejected" === o
                                                ? {
                                                    border: "solid 0px red",
                                                    backgroundColor: "#ffaa91",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "draft" === o
                                                ? {
                                                    border: "solid 0px green",
                                                    backgroundColor: "#ff7d7d",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "deleted" === o ||
                                                  "changeRequest" === o
                                                ? {
                                                    border: "solid 0px red",
                                                    backgroundColor: "#ffaa91",
                                                    padding: "8px 18px",
                                                    borderRadius: "20px",
                                                  }
                                                : "red"),
                                            children: e.status,
                                          }),
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          width: 300,
                                          children: Object(xt.jsxs)(
                                            xt.Fragment,
                                            {
                                              children: [
                                                ("vendor" === ee.user.role &&
                                                  "draft" === e.status) ||
                                                ("siteManager" !==
                                                  ee.user.role &&
                                                  "vendor" !== ee.user.role &&
                                                  "paid" !== e.status &&
                                                  "rejected" !== e.status)
                                                  ? Object(xt.jsx)(f.a, {
                                                      title: "Edit Invoice",
                                                      onClick: function () {
                                                        return n.push(
                                                          "/edit/invoice/".concat(
                                                            e.id
                                                          )
                                                        );
                                                      },
                                                      style: {
                                                        color: "#80000094",
                                                        cursor: "pointer",
                                                      },
                                                      children: Object(xt.jsx)(
                                                        Nt.a,
                                                        {
                                                          style: {
                                                            width: "20px",
                                                            height: "20px",
                                                          },
                                                        }
                                                      ),
                                                    })
                                                  : Object(xt.jsx)("span", {
                                                      style: {
                                                        padding: "21px",
                                                      },
                                                      children: " ",
                                                    }),
                                                Object(xt.jsx)(f.a, {
                                                  title: "View Invoice",
                                                  onClick: function () {
                                                    return n.push(
                                                      "/view/invoice/".concat(
                                                        e.id
                                                      )
                                                    );
                                                  },
                                                  style: {
                                                    color: "#6279edc2",
                                                    cursor: "pointer",
                                                  },
                                                  children: Object(xt.jsx)(
                                                    Tt.a,
                                                    {
                                                      style: {
                                                        width: "20px",
                                                        height: "20px",
                                                      },
                                                    }
                                                  ),
                                                }),
                                                ("admin" !== ee.user.role &&
                                                  "superAdmin" !==
                                                    ee.user.role) ||
                                                "rejected" !== e.status
                                                  ? Object(xt.jsx)("span", {
                                                      style: {
                                                        padding: "20px",
                                                      },
                                                      children: " ",
                                                    })
                                                  : Object(xt.jsx)(f.a, {
                                                      title: "Delete Invoice",
                                                      onClick: function () {
                                                        return I(e.id, u);
                                                      },
                                                      style: {
                                                        color: "red",
                                                        cursor: "pointer",
                                                      },
                                                      children: Object(xt.jsx)(
                                                        G.a,
                                                        {
                                                          style: {
                                                            width: "20px",
                                                          },
                                                        }
                                                      ),
                                                    }),
                                              ],
                                            }
                                          ),
                                        }),
                                      ],
                                    });
                                  })
                              : Object(xt.jsx)(k.a, {
                                  children: Object(xt.jsx)(N.a, {
                                    colSpan:
                                      "vendor" === ee.user.role ? 14 : 16,
                                    align: "center",
                                    children: "No Data Found",
                                  }),
                                }),
                        }),
                      ],
                    }),
                  }),
                  Object(xt.jsx)(_t.a, {
                    rowsPerPageOptions: [2, 10, 25, 100],
                    component: "div",
                    count: r.totalResults ? r.totalResults : 0,
                    rowsPerPage: O || 0,
                    page: h || 0,
                    onPageChange: function (e, t) {
                      m(t);
                    },
                    onRowsPerPageChange: function (e) {
                      w(+e.target.value), m(0);
                    },
                  }),
                ],
              }),
            });
          });
      var Et = n(307),
        Rt = n.n(Et),
        Vt = n(302),
        Wt = n.n(Vt),
        Yt = n(304),
        Ut = n.n(Yt),
        Mt = n(305),
        zt = n.n(Mt),
        qt = n(306),
        Ht = n.n(qt),
        $t = n(309),
        Gt = n.n($t),
        Jt = n(232),
        Qt = n.n(Jt),
        Kt = n(308),
        Xt = n.n(Kt),
        Zt = n(303),
        en = n.n(Zt),
        tn = n(635),
        nn = function () {
          return ee
            ? Object(xt.jsx)("div", {
                children: Object(xt.jsx)("nav", {
                  className: "navbar",
                  children: Object(xt.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                      Object(xt.jsx)("li", {
                        className: "logo",
                        children: Object(xt.jsxs)(s.b, {
                          to: "/invoices",
                          className: "nav-link",
                          children: [
                            Object(xt.jsx)("span", {
                              className: "link-text logo-text",
                              children: Object(xt.jsx)("p", {
                                style: { width: "160px" },
                                children: " PRP Invoice ",
                              }),
                            }),
                            Object(xt.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: "feather feather-arrow-right",
                              children: [
                                Object(xt.jsx)("line", {
                                  x1: "5",
                                  y1: "12",
                                  x2: "19",
                                  y2: "12",
                                }),
                                Object(xt.jsx)("polyline", {
                                  points: "12 5 19 12 12 19",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      ("admin" === ee.user.role ||
                        "superAdmin" === ee.user.role ||
                        "vendor" === ee.user.role) &&
                        Object(xt.jsx)("li", {
                          className: "nav-item",
                          children: Object(xt.jsxs)(s.b, {
                            to: "/dashboard",
                            className: "nav-link",
                            children: [
                              Object(xt.jsx)(Wt.a, {}),
                              Object(xt.jsx)("span", {
                                className: "link-text",
                                children: "Wallet",
                              }),
                            ],
                          }),
                        }),
                      ("vendor" === ee.user.role ||
                        "admin" === ee.user.role ||
                        "superAdmin" === ee.user.role) &&
                        Object(xt.jsx)("li", {
                          className: "nav-item",
                          children: Object(xt.jsxs)(s.b, {
                            to: "/add/invoice",
                            className: "nav-link",
                            children: [
                              Object(xt.jsx)(en.a, {}),
                              Object(xt.jsx)("span", {
                                className: "link-text",
                                children: "Create",
                              }),
                            ],
                          }),
                        }),
                      Object(xt.jsx)("li", {
                        className: "nav-item",
                        children: Object(xt.jsxs)(s.b, {
                          to: "/invoices",
                          className: "nav-link",
                          children: [
                            Object(xt.jsx)(Ut.a, {}),
                            Object(xt.jsx)("span", {
                              className: "link-text",
                              children: "Invoices",
                            }),
                          ],
                        }),
                      }),
                      "superAdmin" === ee.user.role || "admin" === ee.user.role
                        ? Object(xt.jsx)("li", {
                            className: "nav-item",
                            children: Object(xt.jsxs)(s.b, {
                              to: "/deleted-invoices",
                              className: "nav-link",
                              children: [
                                Object(xt.jsx)(zt.a, {}),
                                Object(xt.jsx)("span", {
                                  className: "link-text",
                                  children: "Deleted Invoices",
                                }),
                              ],
                            }),
                          })
                        : Object(xt.jsx)(xt.Fragment, {}),
                      "superAdmin" === ee.user.role || "admin" === ee.user.role
                        ? Object(xt.jsx)("li", {
                            className: "nav-item",
                            children: Object(xt.jsxs)(s.b, {
                              to: "/custom_line_item",
                              className: "nav-link",
                              children: [
                                Object(xt.jsx)(Ht.a, {}),
                                Object(xt.jsx)("span", {
                                  className: "link-text",
                                  children: "custom line item",
                                }),
                              ],
                            }),
                          })
                        : Object(xt.jsx)(xt.Fragment, {}),
                      "superAdmin" === ee.user.role || "admin" === ee.user.role
                        ? Object(xt.jsx)(xt.Fragment, {
                            children: Object(xt.jsx)("li", {
                              className: "nav-item",
                              children: Object(xt.jsxs)(s.b, {
                                to: "/Vendordue-paid-report",
                                className: "nav-link",
                                children: [
                                  Object(xt.jsx)(Qt.a, { fontSize: "large" }),
                                  Object(xt.jsx)("span", {
                                    className: "link-text",
                                    children: "Vendor Due Report",
                                  }),
                                ],
                              }),
                            }),
                          })
                        : Object(xt.jsx)(xt.Fragment, {}),
                      "superAdmin" === ee.user.role || "admin" === ee.user.role
                        ? Object(xt.jsx)("li", {
                            className: "nav-item",
                            children: Object(xt.jsxs)(s.b, {
                              to: "/Dcid-paid-report",
                              className: "nav-link",
                              children: [
                                Object(xt.jsx)(Qt.a, { fontSize: "large" }),
                                Object(xt.jsx)("span", {
                                  className: "link-text",
                                  children: "DC id Paid report",
                                }),
                              ],
                            }),
                          })
                        : Object(xt.jsx)(xt.Fragment, {}),
                      "superAdmin" === ee.user.role
                        ? Object(xt.jsx)("li", {
                            className: "nav-item",
                            children: Object(xt.jsxs)(s.b, {
                              to: "/create-user",
                              className: "nav-link",
                              children: [
                                Object(xt.jsx)(Rt.a, { fontSize: "large" }),
                                Object(xt.jsx)("span", {
                                  className: "link-text",
                                  children: "Create User",
                                }),
                              ],
                            }),
                          })
                        : Object(xt.jsx)(xt.Fragment, {}),
                      "vendor" === ee.user.role
                        ? Object(xt.jsx)("li", {
                            className: "nav-item",
                            children: Object(xt.jsxs)(s.b, {
                              to: "/accounts",
                              className: "nav-link",
                              children: [
                                Object(xt.jsx)(tn.a, { fontSize: "large" }),
                                Object(xt.jsx)("span", {
                                  className: "link-text",
                                  children: "Accounts",
                                }),
                              ],
                            }),
                          })
                        : Object(xt.jsx)(xt.Fragment, {}),
                      Object(xt.jsx)("li", {
                        className: "nav-item",
                        children: Object(xt.jsxs)(s.b, {
                          to: "/withdraw",
                          className: "nav-link",
                          children: [
                            Object(xt.jsx)(Xt.a, {}),
                            Object(xt.jsx)("span", {
                              className: "link-text",
                              children: "Withdraw",
                            }),
                          ],
                        }),
                      }),
                      ("vendor" === ee.user.role ||
                        "admin" === ee.user.role ||
                        "superAdmin" === ee.user.role) &&
                        Object(xt.jsx)("li", {
                          className: "nav-item",
                          children: Object(xt.jsxs)(s.b, {
                            to: "/transaction-history",
                            className: "nav-link",
                            children: [
                              Object(xt.jsx)(Gt.a, { fontSize: "large" }),
                              Object(xt.jsx)("span", {
                                className: "link-text",
                                children: "Transaction History",
                              }),
                            ],
                          }),
                        }),
                      Object(xt.jsx)("li", {
                        className: "nav-item",
                        id: "themeButton",
                      }),
                    ],
                  }),
                }),
              })
            : null;
        },
        an = Object(x.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(8),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: e.spacing(0),
            },
            root: { "& .MuiTextField-root": { margin: e.spacing(0) } },
            avatar: { margin: e.spacing(1), backgroundColor: "#1976d2" },
            form: { width: "100%", marginTop: e.spacing(3) },
            submit: { margin: e.spacing(3, 0, 2) },
            googleButton: { marginBottom: e.spacing(0) },
          };
        }),
        rn = n(233),
        cn = n.n(rn),
        on = n(667),
        sn = n(691),
        ln = n(636),
        dn = n(310),
        un = n.n(dn),
        jn = n(197),
        bn = n.n(jn),
        pn = function () {
          var e = an(),
            t = Object(p.b)(),
            n = Object(l.g)(),
            r = Object(a.useState)(!1),
            c = Object(o.a)(r, 2),
            i = c[0],
            s = c[1],
            u = Object(a.useState)(!1),
            b = Object(o.a)(u, 2),
            m = b[0],
            x = b[1],
            v = Object(d.b)(),
            y = Object(o.a)(v, 1)[0],
            C = function () {
              return s(!i);
            };
          ee && n.push("/invoices");
          var _ = Object(h.d)({
            initialValues: { email: "", password: "" },
            validationSchema: hn,
            onSubmit: function (e, n) {
              var a = n.resetForm;
              t(
                (function (e, t, n, a) {
                  return (function () {
                    var r = Object(J.a)(
                      K.a.mark(function r(c) {
                        var i, o, s, l;
                        return K.a.wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (r.prev = 0), n(!0), (r.next = 4), be(e)
                                  );
                                case 4:
                                  (i = r.sent),
                                    (o = i.data),
                                    c({ type: Te, data: o }),
                                    a(),
                                    n(!1),
                                    t("Login successful"),
                                    (window.location.href = "/invoices"),
                                    (r.next = 17);
                                  break;
                                case 13:
                                  (r.prev = 13),
                                    (r.t0 = r.catch(0)),
                                    t(
                                      null === r.t0 ||
                                        void 0 === r.t0 ||
                                        null === (s = r.t0.response) ||
                                        void 0 === s ||
                                        null === (l = s.data) ||
                                        void 0 === l
                                        ? void 0
                                        : l.message
                                    ),
                                    n(!1);
                                case 17:
                                case "end":
                                  return r.stop();
                              }
                          },
                          r,
                          null,
                          [[0, 13]]
                        );
                      })
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })();
                })(e, y, x, a)
              );
            },
          });
          return Object(xt.jsx)(Ct.a, {
            component: "main",
            maxWidth: "xs",
            children: Object(xt.jsxs)(I.a, {
              className: e.paper,
              elevation: 2,
              children: [
                Object(xt.jsx)(sn.a, {
                  className: e.avatar,
                  children: Object(xt.jsx)(un.a, {}),
                }),
                Object(xt.jsx)(O.a, {
                  component: "h1",
                  variant: "h5",
                  children: "Sign in",
                }),
                Object(xt.jsxs)("form", {
                  className: e.form,
                  onSubmit: _.handleSubmit,
                  autoComplete: "off",
                  children: [
                    Object(xt.jsxs)(g.a, {
                      container: !0,
                      spacing: 3,
                      children: [
                        Object(xt.jsx)(g.a, {
                          item: !0,
                          xs: 12,
                          md: 12,
                          children: Object(xt.jsx)(w.a, {
                            name: "email",
                            variant: "outlined",
                            fullWidth: !0,
                            label: "Email Address",
                            onBlur: function () {
                              return _.setTouched(
                                Object(j.a)(
                                  Object(j.a)({}, _.touched),
                                  {},
                                  { email: !0 }
                                )
                              );
                            },
                            value: _.values.email,
                            onChange: _.handleChange,
                            error: _.touched.email && Boolean(_.errors.email),
                            helperText: _.touched.email && _.errors.email,
                          }),
                        }),
                        Object(xt.jsx)(g.a, {
                          item: !0,
                          xs: 12,
                          md: 12,
                          children: Object(xt.jsx)(w.a, {
                            name: "password",
                            label: "Password",
                            variant: "outlined",
                            fullWidth: !0,
                            type: i ? "text" : "password",
                            handleShowPassword: C,
                            onBlur: function () {
                              return _.setTouched(
                                Object(j.a)(
                                  Object(j.a)({}, _.touched),
                                  {},
                                  { password: !0 }
                                )
                              );
                            },
                            value: _.values.password,
                            onChange: _.handleChange,
                            error:
                              _.touched.password && Boolean(_.errors.password),
                            helperText: _.touched.password && _.errors.password,
                            InputProps: {
                              endAdornment: Object(xt.jsx)(ln.a, {
                                position: "end",
                                children: Object(xt.jsx)(f.a, {
                                  onClick: C,
                                  children: i
                                    ? Object(xt.jsx)(Tt.a, {})
                                    : Object(xt.jsx)(bn.a, {}),
                                }),
                              }),
                            },
                          }),
                        }),
                      ],
                    }),
                    Object(xt.jsx)("br", {}),
                    Object(xt.jsx)(g.a, {
                      container: !0,
                      justifyContent: "flex-end",
                      children: Object(xt.jsx)(g.a, {
                        item: !0,
                        children: Object(xt.jsx)(on.a, {
                          onClick: function () {
                            n.push("/forgot");
                          },
                          children: "Forgot Password",
                        }),
                      }),
                    }),
                    Object(xt.jsx)("div", {
                      className: cn.a.buttons,
                      style: { margin: "0px" },
                      children: Object(xt.jsx)("div", {
                        children: m
                          ? Object(xt.jsx)(St.a, {})
                          : Object(xt.jsx)("button", {
                              type: "submit",
                              className: cn.a.loginBtn,
                              disabled: m,
                              children: "Sign In",
                            }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        hn = W.d({
          email: W.e().email().required("Email is required"),
          password: W.e().required("Password is required"),
        }),
        mn = n(234),
        xn = n.n(mn),
        vn = n(637),
        On = n(616),
        fn = n(618),
        gn = n(689),
        yn = n(690),
        wn = n(235),
        Cn = n.n(wn),
        In = n(321);
      window.socket_client = In.a.connect(te);
      var _n = function () {
          var e,
            t,
            n,
            c = Object(p.b)(),
            i = Object(l.g)(),
            s = {
              refreshToken:
                null === ee ||
                void 0 === ee ||
                null === (e = ee.tokens) ||
                void 0 === e
                  ? void 0
                  : e.refreshToken,
            },
            d = Object(a.useState)(!1),
            u = Object(o.a)(d, 2),
            b = u[0],
            h = u[1],
            m = Object(p.c)(function (e) {
              return e.notification.showNotificationBadge;
            });
          Object(a.useEffect)(
            function () {
              ee &&
                (window.socket_client.on(
                  "".concat(ee.user.id, "/notifications"),
                  function () {
                    c({ type: Je, payload: !0 });
                  }
                ),
                window.socket_client.on(
                  "".concat(ee.user.role, "/notifications"),
                  function () {
                    c({ type: Je, payload: !0 });
                  }
                ));
            },
            [c]
          ),
            Object(a.useEffect)(
              function () {
                var e = setInterval(function () {
                  var e;
                  ut()(new Date()).format("MMMM Do YYYY, hh:mm:ss a") >=
                    ut()(ee.tokens.accessTokenExpiresAt)
                      .subtract(1, "minutes")
                      .format("MMMM Do YYYY, hh:mm:ss a") &&
                    c(
                      ((e = { refreshToken: ee.tokens.refreshToken }),
                      (function () {
                        var t = Object(J.a)(
                          K.a.mark(function t(n) {
                            var a, r;
                            return K.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.prev = 0), (t.next = 3), me(e);
                                    case 3:
                                      (a = t.sent),
                                        (r = a.data),
                                        delete ee.tokens,
                                        (ee.tokens = r),
                                        n({ type: qe, userData: ee }),
                                        (t.next = 14);
                                      break;
                                    case 10:
                                      (t.prev = 10),
                                        (t.t0 = t.catch(0)),
                                        401 === t.t0.response.data.code &&
                                          (localStorage.removeItem("profile"),
                                          window.location.reload()),
                                        console.log(t.t0);
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 10]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })())
                    );
                }, 3e4);
                return function () {
                  return clearInterval(e);
                };
              },
              [c]
            );
          var x = function () {
              var e;
              c(
                ((e = s),
                (function () {
                  var t = Object(J.a)(
                    K.a.mark(function t(n) {
                      var a, r;
                      return K.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), he(e);
                              case 3:
                                (a = t.sent),
                                  (r = a.data),
                                  n({ type: Te, data: r }),
                                  localStorage.removeItem("profile"),
                                  (window.location.href = "/"),
                                  (t.next = 13);
                                break;
                              case 10:
                                (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  console.log(t.t0);
                              case 13:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            v = r.a.useRef(null),
            O = function (e) {
              (v.current && v.current.contains(e.target)) || h(!1);
            };
          function f(e) {
            "Tab" === e.key && (e.preventDefault(), h(!1));
          }
          var y = r.a.useRef(b);
          Object(a.useEffect)(
            function () {
              !0 === y.current && !1 === b && v.current.focus(),
                (y.current = b);
            },
            [b]
          );
          return Object(xt.jsxs)(g.a, {
            className: xn.a.header,
            container: !0,
            justifyContent: "space-between",
            style: { paddingLeft: "8%" },
            children: [
              Object(xt.jsx)(g.a, {
                children: Object(xt.jsx)(P.a, {
                  style: { color: "#1976d2" },
                  onClick: function () {
                    "/payment-verification" === localStorage.getItem("url")
                      ? (localStorage.removeItem("url"), i.go(-3))
                      : i.goBack();
                  },
                  children: "Back",
                }),
              }),
              Object(xt.jsxs)(g.a, {
                style: { marginRight: "5px" },
                children: [
                  Object(xt.jsx)(P.a, {
                    children: m
                      ? Object(xt.jsx)(It.a, {
                          color: "secondary",
                          overlap: "rectangular",
                          badgeContent: " ",
                          variant: "dot",
                          children: Object(xt.jsx)(Cn.a, {
                            color: "primary",
                            onClick: function () {
                              i.push("/Notifications"),
                                c({ type: Je, payload: !1 });
                            },
                          }),
                        })
                      : Object(xt.jsx)(Cn.a, {
                          color: "primary",
                          onClick: function () {
                            i.push("/Notifications"),
                              c({ type: Je, payload: !1 });
                          },
                        }),
                  }),
                  Object(xt.jsx)(P.a, {
                    ref: v,
                    "aria-controls": b ? "menu-list-grow" : void 0,
                    "aria-haspopup": "true",
                    onClick: function () {
                      h(function (e) {
                        return !e;
                      });
                    },
                    children: Object(xt.jsx)(sn.a, {
                      style: { backgroundColor: "#1976D2" },
                      children:
                        null === ee ||
                        void 0 === ee ||
                        null === (t = ee.result) ||
                        void 0 === t ||
                        null === (n = t.name) ||
                        void 0 === n
                          ? void 0
                          : n.charAt(0),
                    }),
                  }),
                  Object(xt.jsx)(On.a, {
                    open: b,
                    anchorEl: v.current,
                    role: void 0,
                    transition: !0,
                    disablePortal: !0,
                    className: xn.a.popper,
                    placement: "bottom-end",
                    children: function (e) {
                      var t,
                        n = e.TransitionProps,
                        a = e.placement;
                      return Object(xt.jsx)(
                        fn.a,
                        Object(j.a)(
                          Object(j.a)({}, n),
                          {},
                          {
                            style: {
                              transformOrigin:
                                "bottom" === a ? "center top" : "center bottom",
                            },
                            children: Object(xt.jsx)(I.a, {
                              elevation: 3,
                              children: Object(xt.jsx)(vn.a, {
                                onClickAway: O,
                                children: Object(xt.jsxs)(gn.a, {
                                  autoFocusItem: b,
                                  id: "menu-list-grow",
                                  onKeyDown: f,
                                  children: [
                                    Object(xt.jsx)(yn.a, {
                                      onClick: function () {
                                        return (
                                          (e = "settings"),
                                          i.push("/".concat(e)),
                                          void h(!1)
                                        );
                                        var e;
                                      },
                                      children:
                                        null === ee ||
                                        void 0 === ee ||
                                        null === (t = ee.user) ||
                                        void 0 === t
                                          ? void 0
                                          : t.email,
                                    }),
                                    Object(xt.jsx)(yn.a, {
                                      onClick: function () {
                                        return i.push("/reset");
                                      },
                                      children: "Change Password",
                                    }),
                                    Object(xt.jsx)(yn.a, {
                                      onClick: function () {
                                        return x();
                                      },
                                      children: "Logout",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }
                        )
                      );
                    },
                  }),
                ],
              }),
            ],
          });
        },
        Sn = Object(x.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(0),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: e.spacing(4),
            },
            root: { "& .MuiTextField-root": { margin: e.spacing(1) } },
            form: { width: "100%", marginTop: e.spacing(3) },
            submit: { margin: e.spacing(2, 0, 2) },
          };
        }),
        kn = function (e) {
          var t = e.name,
            n = e.id,
            a = e.handleChange,
            r = e.handleBlur,
            c = e.label,
            i = e.half,
            o = e.autoFocus,
            s = e.type,
            l = e.handleShowPassword,
            d = e.placeholder,
            u = e.error,
            j = e.helperText;
          return Object(xt.jsx)(g.a, {
            item: !0,
            xs: 12,
            sm: i ? 6 : 12,
            children: Object(xt.jsx)(w.a, {
              id: n,
              name: t,
              onChange: a,
              placeholder: d,
              variant: "outlined",
              fullWidth: !0,
              onBlur: r,
              label: c,
              autoFocus: o,
              type: s,
              error: u,
              helperText: j,
              InputProps: t.includes("password")
                ? {
                    endAdornment: Object(xt.jsx)(ln.a, {
                      position: "end",
                      children: Object(xt.jsx)(f.a, {
                        onClick: l,
                        children:
                          "password" === s
                            ? Object(xt.jsx)(Tt.a, {})
                            : Object(xt.jsx)(bn.a, {}),
                      }),
                    }),
                  }
                : null,
            }),
          });
        },
        Nn = n(128),
        Dn = n.n(Nn),
        Tn = function () {
          var e = Sn(),
            t = Object(l.g)(),
            n = Object(a.useState)(""),
            r = Object(o.a)(n, 2),
            c = r[0],
            i = r[1],
            s = Object(a.useState)(0),
            u = Object(o.a)(s, 2),
            j = u[0],
            b = u[1],
            h = Object(d.b)(),
            m = Object(o.a)(h, 1)[0],
            x = Object(p.b)();
          return (
            ee && t.push("/invoices"),
            Object(xt.jsx)("div", {
              style: { paddingTop: "100px", paddingBottom: "100px" },
              children: Object(xt.jsx)(Ct.a, {
                component: "main",
                maxWidth: "xs",
                children: Object(xt.jsxs)(I.a, {
                  className: e.paper,
                  variant: "outlined",
                  children: [
                    0 === j &&
                      Object(xt.jsxs)("div", {
                        children: [
                          Object(xt.jsx)(O.a, {
                            variant: "h6",
                            gutter: "5",
                            children: "Please enter your email address",
                          }),
                          Object(xt.jsx)("form", {
                            className: e.root,
                            noValidate: !0,
                            autoComplete: "off",
                            onSubmit: function (e) {
                              e.preventDefault(),
                                x(
                                  (function (e, t) {
                                    return (function () {
                                      var n = Object(J.a)(
                                        K.a.mark(function n(a) {
                                          var r, c;
                                          return K.a.wrap(
                                            function (n) {
                                              for (;;)
                                                switch ((n.prev = n.next)) {
                                                  case 0:
                                                    return (
                                                      (n.prev = 0),
                                                      (n.next = 3),
                                                      pe(e)
                                                    );
                                                  case 3:
                                                    n.next = 8;
                                                    break;
                                                  case 5:
                                                    (n.prev = 5),
                                                      (n.t0 = n.catch(0)),
                                                      t(
                                                        null === n.t0 ||
                                                          void 0 === n.t0 ||
                                                          null ===
                                                            (r =
                                                              n.t0.response) ||
                                                          void 0 === r ||
                                                          null ===
                                                            (c = r.data) ||
                                                          void 0 === c
                                                          ? void 0
                                                          : c.message
                                                      );
                                                  case 8:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            },
                                            n,
                                            null,
                                            [[0, 5]]
                                          );
                                        })
                                      );
                                      return function (e) {
                                        return n.apply(this, arguments);
                                      };
                                    })();
                                  })({ email: c }, m)
                                ),
                                window.navigator.onLine ? b(1) : b(2);
                            },
                            children: Object(xt.jsxs)(g.a, {
                              container: !0,
                              spacing: 2,
                              children: [
                                Object(xt.jsx)(kn, {
                                  name: "email",
                                  label: "Email Address",
                                  handleChange: function (e) {
                                    return i(e.target.value);
                                  },
                                  type: "email",
                                }),
                                Object(xt.jsxs)(P.a, {
                                  type: "submit",
                                  fullWidth: !0,
                                  variant: "contained",
                                  color: "primary",
                                  className: e.submit,
                                  children: [" ", "Submit", " "],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    1 === j &&
                      Object(xt.jsxs)("div", {
                        children: [
                          Object(xt.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: [
                              " ",
                              Object(xt.jsx)("i", {
                                className: "fas fa-check-circle",
                                style: { fontSize: "55px", color: "#3e6947" },
                              }),
                            ],
                          }),
                          Object(xt.jsx)("br", {}),
                          Object(xt.jsx)("p", {
                            children:
                              "A password reset link has been sent to your email. Please follow the link to reset your password",
                          }),
                          Object(xt.jsxs)("div", {
                            className: Dn.a.buttons,
                            children: [
                              Object(xt.jsx)("button", {
                                className: Dn.a.button,
                                onClick: function () {
                                  return t.push("/");
                                },
                                children: "Back to home",
                              }),
                              Object(xt.jsx)("button", {
                                className: Dn.a.button,
                                onClick: function () {
                                  return b(0);
                                },
                                children: "Resend link",
                              }),
                            ],
                          }),
                        ],
                      }),
                    2 === j &&
                      Object(xt.jsxs)("div", {
                        children: [
                          Object(xt.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: [
                              " ",
                              Object(xt.jsx)("i", {
                                className: "fas fa-check-circle",
                                style: { fontSize: "55px", color: "#3e6947" },
                              }),
                            ],
                          }),
                          Object(xt.jsx)("br", {}),
                          Object(xt.jsx)("p", {
                            children:
                              "Please check your internet connection and try again",
                          }),
                          Object(xt.jsxs)("div", {
                            className: Dn.a.buttons,
                            children: [
                              Object(xt.jsx)("button", {
                                className: Dn.a.button,
                                onClick: function () {
                                  return t.push("/");
                                },
                                children: "Back to home",
                              }),
                              Object(xt.jsx)("button", {
                                className: Dn.a.button,
                                onClick: function () {
                                  return b(0);
                                },
                                children: "Resend link",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            })
          );
        },
        Pn = function () {
          var e = Sn(),
            t = Object(a.useState)({
              currentPassword: "",
              changePassword: "",
              confirmPassword: "",
            }),
            n = Object(o.a)(t, 1)[0],
            r = Object(d.b)(),
            c = Object(o.a)(r, 1)[0],
            i = W.d().shape({
              currentPassword: W.e().required("Current Password is required"),
              changePassword: W.e().required("Change Password is required"),
              confirmPassword: W.e().required("Confirm Password is required"),
            }),
            s = Object(p.b)(),
            u = Object(l.g)(),
            j = Object(l.i)().token,
            b = Object(a.useState)(!1),
            m = Object(o.a)(b, 2),
            x = m[0],
            v = m[1],
            f = function () {
              return v(!x);
            };
          return Object(xt.jsx)("div", {
            style: { paddingTop: "100px", paddingBottom: "100px" },
            children: Object(xt.jsx)(Ct.a, {
              component: "main",
              maxWidth: "xs",
              children: Object(xt.jsxs)(I.a, {
                className: e.paper,
                variant: "outlined",
                children: [
                  Object(xt.jsx)(O.a, {
                    variant: "h6",
                    gutter: "5",
                    children: "Change Password",
                  }),
                  Object(xt.jsx)(h.c, {
                    initialValues: n,
                    validationSchema: i,
                    onSubmit: function (e) {
                      s(
                        (function (e, t, n) {
                          return (function () {
                            var a = Object(J.a)(
                              K.a.mark(function a(r) {
                                var c, i;
                                return K.a.wrap(
                                  function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return (
                                            (a.prev = 0),
                                            (a.next = 3),
                                            (r = e.token),
                                            (o = e.password),
                                            ne.post(
                                              "/v1/auth/reset-password?token=".concat(
                                                r
                                              ),
                                              { password: o }
                                            )
                                          );
                                        case 3:
                                          n.push("/invoices"),
                                            t("Password Changed"),
                                            (a.next = 10);
                                          break;
                                        case 7:
                                          (a.prev = 7),
                                            (a.t0 = a.catch(0)),
                                            t(
                                              null === a.t0 ||
                                                void 0 === a.t0 ||
                                                null === (c = a.t0.response) ||
                                                void 0 === c ||
                                                null === (i = c.data) ||
                                                void 0 === i
                                                ? void 0
                                                : i.message
                                            );
                                        case 10:
                                        case "end":
                                          return a.stop();
                                      }
                                    var r, o;
                                  },
                                  a,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            );
                            return function (e) {
                              return a.apply(this, arguments);
                            };
                          })();
                        })({ password: e.confirmPassword, token: j }, c, u)
                      );
                    },
                    enableReinitialize: !0,
                    children: function (t) {
                      var n = t.values,
                        a = t.touched,
                        r = t.errors,
                        c = t.handleBlur,
                        i = t.handleChange;
                      return Object(xt.jsx)(h.b, {
                        className: e.root,
                        noValidate: !0,
                        autoComplete: "off",
                        children: Object(xt.jsxs)(g.a, {
                          container: !0,
                          spacing: 2,
                          children: [
                            Object(xt.jsx)(kn, {
                              name: "currentPassword",
                              id: "currentPassword",
                              label: "Current Password",
                              value: n.currentPassword,
                              handleChange: i,
                              handleBlur: c,
                              type: x ? "text" : "password",
                              handleShowPassword: f,
                            }),
                            a.currentPassword &&
                              r.currentPassword &&
                              Object(xt.jsx)("div", {
                                className: "help-block text-warn",
                                style: { color: "#d15a5a" },
                                children: r.currentPassword,
                              }),
                            Object(xt.jsx)(kn, {
                              name: "changePassword",
                              id: "changePassword",
                              label: "Change Password",
                              value: n.changePassword,
                              handleBlur: c,
                              handleChange: i,
                              type: x ? "text" : "password",
                              handleShowPassword: f,
                            }),
                            a.changePassword &&
                              r.changePassword &&
                              Object(xt.jsx)("div", {
                                className: "help-block text-warn",
                                style: { color: "#d15a5a" },
                                children: r.changePassword,
                              }),
                            Object(xt.jsx)(kn, {
                              name: "confirmPassword",
                              id: "confirmPassword",
                              label: "Confirm Password",
                              value: n.confirmPassword,
                              handleBlur: c,
                              handleChange: i,
                              type: x ? "text" : "password",
                              handleShowPassword: f,
                            }),
                            a.confirmPassword &&
                              r.confirmPassword &&
                              Object(xt.jsx)("div", {
                                className: "help-block text-warn",
                                style: { color: "#d15a5a" },
                                children: r.confirmPassword,
                              }),
                            Object(xt.jsx)(P.a, {
                              type: "submit",
                              fullWidth: !0,
                              variant: "contained",
                              color: "primary",
                              className: e.submit,
                              children: "Submit",
                            }),
                          ],
                        }),
                      });
                    },
                  }),
                ],
              }),
            }),
          });
        },
        An = function () {
          var e,
            t = Object(p.b)(),
            n = Object(l.h)(),
            r = Object(l.g)(),
            c = Object(p.c)(function (e) {
              return e.invoices.invoice;
            }),
            i = Object(p.c)(function (e) {
              return e.invoices.isLoading;
            }),
            s = Object(a.useState)(0),
            d = Object(o.a)(s, 2),
            u = d[0],
            j = d[1],
            b = Object(a.useState)(10),
            h = Object(o.a)(b, 2),
            m = h[0],
            x = h[1];
          ee || r.push("/");
          return (
            Object(a.useEffect)(
              function () {
                var e, n;
                t(
                  ((e = m),
                  (n = u + 1),
                  (function () {
                    var t = Object(J.a)(
                      K.a.mark(function t(a) {
                        var r, c, i, o;
                        return K.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: Ne }),
                                    (t.next = 4),
                                    xe(e, n)
                                  );
                                case 4:
                                  (r = t.sent),
                                    (c = r.data),
                                    a({ type: De }),
                                    a({ type: Ve, payload: c }),
                                    (t.next = 14);
                                  break;
                                case 10:
                                  (t.prev = 10),
                                    (t.t0 = t.catch(0)),
                                    401 ===
                                      (null === t.t0 ||
                                      void 0 === t.t0 ||
                                      null === (i = t.t0.response) ||
                                      void 0 === i ||
                                      null === (o = i.data) ||
                                      void 0 === o
                                        ? void 0
                                        : o.code) &&
                                      (localStorage.removeItem("profile"),
                                      window.location.reload()),
                                    console.log(t.t0);
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                );
              },
              [n, u, m]
            ),
            Object(xt.jsx)(xt.Fragment, {
              children: Object(xt.jsxs)(Ct.a, {
                style: { marginTop: "75px" },
                children: [
                  Object(xt.jsx)(g.a, {
                    container: !0,
                    justifyContent: "space-between",
                    style: { padding: "2%", backgroundColor: "#fff" },
                    children: Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)("h1", {
                        children: "Deleted Invoices",
                      }),
                    }),
                  }),
                  Object(xt.jsx)(y.a, {}),
                  Object(xt.jsx)(C.a, {
                    children: Object(xt.jsxs)(_.a, {
                      "aria-label": "collapsible table",
                      children: [
                        Object(xt.jsx)(S.a, {
                          children: Object(xt.jsxs)(k.a, {
                            children: [
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "180px" },
                                children: "Invoice Number",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Client Name",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Date",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Due Date",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Tax Amount",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Tax Percentage",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Total Amount",
                              }),
                              "vendor" === ee.user.role &&
                                Object(xt.jsxs)(xt.Fragment, {
                                  children: [
                                    Object(xt.jsx)(N.a, {
                                      style: { top: 57, minWidth: "120px" },
                                      children: "Contact",
                                    }),
                                    Object(xt.jsx)(N.a, {
                                      style: { top: 57, minWidth: "120px" },
                                      children: "vendor",
                                    }),
                                  ],
                                }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "320px" },
                                children: "DC ids",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Manager Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Admin Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Accountant Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Managing Admin Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Status",
                              }),
                              Object(xt.jsx)(N.a, {
                                style: { top: 57, minWidth: "120px" },
                                children: "Action",
                              }),
                            ],
                          }),
                        }),
                        Object(xt.jsx)(D.a, {
                          children:
                            (c && c.resultData) || i
                              ? i
                                ? Object(xt.jsx)(k.a, {
                                    sx: { "& > *": { borderBottom: "unset" } },
                                    children: Object(xt.jsx)(N.a, {
                                      scope: "row",
                                      width: 300,
                                      style: { fontSize: 16 },
                                      colSpan:
                                        "vendor" === ee.user.role ? 14 : 16,
                                      align: "center",
                                      children: Object(xt.jsx)(St.a, {
                                        size: 25,
                                        thickness: 4,
                                        sx: { mt: 3, ml: 1 },
                                      }),
                                    }),
                                  })
                                : null === (e = c.resultData) || void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    var t, n, a, c, i, o;
                                    return Object(xt.jsxs)(
                                      k.a,
                                      {
                                        children: [
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            style: { fontSize: 16 },
                                            width: 300,
                                            children: e.invoiceNumber,
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: "PRP",
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: ut()(e.date).format(
                                              "DD-MM-YYYY"
                                            ),
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: ut()(e.dueDate).format(
                                              "DD-MM-YYYY"
                                            ),
                                          }),
                                          Object(xt.jsxs)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            align: "right",
                                            children: [
                                              "$",
                                              Number(e.taxAmount).toFixed(2),
                                            ],
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            align: "center",
                                            children: e.taxPercentage,
                                          }),
                                          Object(xt.jsxs)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            align: "right",
                                            children: [
                                              "$",
                                              Number(e.totalAmount).toFixed(2),
                                            ],
                                          }),
                                          "vendor" === ee.user.role &&
                                            Object(xt.jsxs)(xt.Fragment, {
                                              children: [
                                                Object(xt.jsx)(N.a, {
                                                  scope: "row",
                                                  width: 300,
                                                  children: Object(xt.jsx)(
                                                    "span",
                                                    {
                                                      title:
                                                        null === e ||
                                                        void 0 === e ||
                                                        null ===
                                                          (t = e.vendorId) ||
                                                        void 0 === t
                                                          ? void 0
                                                          : t.email,
                                                      children:
                                                        null === e ||
                                                        void 0 === e ||
                                                        null ===
                                                          (n = e.vendorId) ||
                                                        void 0 === n
                                                          ? void 0
                                                          : n.email,
                                                    }
                                                  ),
                                                }),
                                                Object(xt.jsx)(N.a, {
                                                  scope: "row",
                                                  width: 300,
                                                  children:
                                                    null === e ||
                                                    void 0 === e ||
                                                    null === (a = e.vendorId) ||
                                                    void 0 === a ||
                                                    null ===
                                                      (c = a.externalData) ||
                                                    void 0 === c ||
                                                    null === (i = c.vendor) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.name,
                                                }),
                                              ],
                                            }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: Object(xt.jsx)("span", {
                                              title: e.distributionCenter.dcId,
                                              children:
                                                e.distributionCenter.dcId,
                                            }),
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: e.managerStatus,
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: e.adminStatus,
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: e.accountantStatus,
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: e.superAdminStatus,
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: Object(xt.jsx)(It.a, {
                                              overlap: "rectangular",
                                              style:
                                                ((o = e.status),
                                                "partial" === o
                                                  ? {
                                                      border:
                                                        "solid 0px #1976d2",
                                                      backgroundColor:
                                                        "#baddff",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "paid" === o
                                                  ? {
                                                      border: "solid 0px green",
                                                      backgroundColor:
                                                        "#a5ffcd",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "unpaid" === o
                                                  ? {
                                                      border: "solid 0px red",
                                                      backgroundColor:
                                                        "#f5ff91",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "approved" === o
                                                  ? {
                                                      border: "solid 0px red",
                                                      backgroundColor:
                                                        "#91faff",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "rejected" === o
                                                  ? {
                                                      border: "solid 0px red",
                                                      backgroundColor:
                                                        "#ffaa91",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "draft" === o
                                                  ? {
                                                      border: "solid 0px green",
                                                      backgroundColor:
                                                        "#ff7d7d",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "deleted" === o ||
                                                    "changeRequest" === o
                                                  ? {
                                                      border: "solid 0px red",
                                                      backgroundColor:
                                                        "#ffaa91",
                                                      padding: "8px 18px",
                                                      borderRadius: "20px",
                                                    }
                                                  : "red"),
                                              children: e.status,
                                            }),
                                          }),
                                          Object(xt.jsx)(N.a, {
                                            scope: "row",
                                            width: 300,
                                            children: Object(xt.jsxs)(
                                              xt.Fragment,
                                              {
                                                children: [
                                                  ("vendor" === ee.user.role &&
                                                    "draft" === e.status) ||
                                                  ("siteManager" !==
                                                    ee.user.role &&
                                                    "vendor" !== ee.user.role &&
                                                    "paid" !== e.status &&
                                                    "rejected" !== e.status)
                                                    ? Object(xt.jsx)(f.a, {
                                                        title: "Edit Invoice",
                                                        onClick: function () {
                                                          return r.push(
                                                            "/edit/invoice/".concat(
                                                              e.id
                                                            )
                                                          );
                                                        },
                                                        style: {
                                                          color: "#80000094",
                                                          cursor: "pointer",
                                                        },
                                                        children: Object(
                                                          xt.jsx
                                                        )(Nt.a, {
                                                          style: {
                                                            width: "20px",
                                                            height: "20px",
                                                          },
                                                        }),
                                                      })
                                                    : Object(xt.jsx)("span", {
                                                        style: {
                                                          padding: "21px",
                                                        },
                                                        children: " ",
                                                      }),
                                                  Object(xt.jsx)(f.a, {
                                                    title: "View Invoice",
                                                    onClick: function () {
                                                      return r.push(
                                                        "/view/invoice/".concat(
                                                          e.id
                                                        )
                                                      );
                                                    },
                                                    style: {
                                                      color: "#6279edc2",
                                                      cursor: "pointer",
                                                    },
                                                    children: Object(xt.jsx)(
                                                      Tt.a,
                                                      {
                                                        style: {
                                                          width: "20px",
                                                          height: "20px",
                                                        },
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }
                                            ),
                                          }),
                                        ],
                                      },
                                      e.invoiceNumber
                                    );
                                  })
                              : Object(xt.jsx)(k.a, {
                                  children: Object(xt.jsx)(N.a, {
                                    colSpan:
                                      "vendor" === ee.user.role ? 14 : 16,
                                    align: "center",
                                    children: "No Data Found",
                                  }),
                                }),
                        }),
                      ],
                    }),
                  }),
                  Object(xt.jsx)(_t.a, {
                    rowsPerPageOptions: [2, 10, 25, 100],
                    component: "div",
                    count: c.totalResults ? c.totalResults : 0,
                    rowsPerPage: m || 0,
                    page: u || 0,
                    onPageChange: function (e, t) {
                      j(t);
                    },
                    onRowsPerPageChange: function (e) {
                      x(+e.target.value), j(0);
                    },
                  }),
                ],
              }),
            })
          );
        };
      var Bn = function () {
          var e,
            t = Object(p.b)(),
            n = Object(l.g)(),
            c = Object(p.c)(function (e) {
              return e.notification.notificationDetails;
            }),
            i = Object(a.useState)(0),
            s = Object(o.a)(i, 2),
            d = s[0],
            u = s[1],
            j = Object(a.useState)(10),
            b = Object(o.a)(j, 2),
            h = b[0],
            m = b[1];
          Object(a.useEffect)(
            function () {
              var e, n;
              t(
                ((e = h),
                (n = d + 1),
                (function () {
                  var t = Object(J.a)(
                    K.a.mark(function t(a) {
                      var r, c;
                      return K.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  a({ type: Ne }),
                                  (t.next = 4),
                                  ve(e, n)
                                );
                              case 4:
                                (r = t.sent),
                                  (c = r.data),
                                  a({ type: Ge, payload: c }),
                                  a({ type: De }),
                                  (t.next = 14);
                                break;
                              case 10:
                                (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  401 === t.t0.response.data.code &&
                                    (localStorage.removeItem("profile"),
                                    window.location.reload()),
                                  console.log(t.t0);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            [t, d, h]
          );
          var x = Object(p.c)(function (e) {
            return e.invoices.isLoading;
          });
          ee || n.push("/");
          return Object(xt.jsx)(r.a.Fragment, {
            children: Object(xt.jsxs)(Ct.a, {
              style: { marginTop: "75px" },
              children: [
                Object(xt.jsx)(g.a, {
                  container: !0,
                  justifyContent: "space-between",
                  style: { padding: "2%", backgroundColor: "#fff" },
                  children: Object(xt.jsx)(g.a, {
                    children: Object(xt.jsx)("h1", {
                      children: "Notification",
                    }),
                  }),
                }),
                Object(xt.jsx)(y.a, {}),
                Object(xt.jsx)(C.a, {
                  children: Object(xt.jsxs)(_.a, {
                    "aria-label": "collapsible table",
                    children: [
                      Object(xt.jsx)(S.a, {
                        children: Object(xt.jsxs)(k.a, {
                          children: [
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, width: "220px" },
                              children: "Message",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, width: "60px" },
                              children: "Create Date",
                            }),
                          ],
                        }),
                      }),
                      Object(xt.jsx)(D.a, {
                        children:
                          (c && c.resultData) || x
                            ? x
                              ? Object(xt.jsx)(k.a, {
                                  sx: { "& > *": { borderBottom: "unset" } },
                                  children: Object(xt.jsx)(N.a, {
                                    scope: "row",
                                    style: { fontSize: 16 },
                                    colSpan: 2,
                                    align: "center",
                                    children: Object(xt.jsx)(St.a, {
                                      size: 25,
                                      thickness: 4,
                                      sx: { mt: 3, ml: 1 },
                                    }),
                                  }),
                                })
                              : null === (e = c.resultData) || void 0 === e
                              ? void 0
                              : e.map(function (e) {
                                  return Object(xt.jsxs)(k.a, {
                                    children: [
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        style: { fontSize: 16, width: "220px" },
                                        width: 300,
                                        children: e.message,
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        style: { width: "60px" },
                                        children: ut()(e.createdAt).format(
                                          "DD-MM-YYYY hh:mm a "
                                        ),
                                      }),
                                    ],
                                  });
                                })
                            : Object(xt.jsx)(k.a, {
                                children: Object(xt.jsx)(N.a, {
                                  colSpan: "vendor" === ee.user.role ? 14 : 16,
                                  align: "center",
                                  children: "No Data Found",
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                Object(xt.jsx)(_t.a, {
                  rowsPerPageOptions: [2, 10, 25, 100],
                  component: "div",
                  count: c.totalResults ? c.totalResults : 0,
                  rowsPerPage: h || 0,
                  page: d || 0,
                  onChangePage: function (e, t) {
                    u(t);
                  },
                  onChangeRowsPerPage: function (e) {
                    m(+e.target.value), u(0);
                  },
                }),
              ],
            }),
          });
        },
        Fn = ["component", "restricted"],
        Ln = function (e) {
          var t = e.component,
            n = e.restricted,
            a = Object(b.a)(e, Fn);
          return Object(xt.jsx)(
            l.b,
            Object(j.a)(
              Object(j.a)({}, a),
              {},
              {
                render: function (e) {
                  return !ee && n
                    ? Object(xt.jsx)(l.a, { to: "/" })
                    : Object(xt.jsx)(t, Object(j.a)({}, e));
                },
              }
            )
          );
        },
        En = n(142),
        Rn = n(312),
        Vn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    isLoading: !0,
                    invoices: [],
                    invoice: [],
                    itemList: [],
                    DCid: [],
                    getVendorList: [],
                    userList: [],
                    dcids: [],
                    customLineItem: null,
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ne:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !0 });
            case De:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !1 });
            case Pe:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { DCid: null === t || void 0 === t ? void 0 : t.payload }
              );
            case We:
            case He:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { invoices: t.payload }
              );
            case Ve:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { invoice: t.payload, isLoading: !1 }
              );
            case Ye:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { itemList: t.payload }
              );
            case Le:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { invoices: t.payload }
              );
            case Ee:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { invoices: t.payload, isLoading: !1 }
              );
            case Me:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { customLineItem: t.payload }
              );
            case Re:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                {
                  invoices:
                    null === e || void 0 === e
                      ? void 0
                      : e.invoice.filter(function (e) {
                          return e.id !== t.payload;
                        }),
                }
              );
            case Ue:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                {
                  userList: null === t || void 0 === t ? void 0 : t.payload,
                  isLoading: !1,
                }
              );
            case Fe:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                {
                  dcids: null === t || void 0 === t ? void 0 : t.payload,
                  isLoading: !1,
                }
              );
            case ze:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                {
                  getVendorList:
                    null === t || void 0 === t ? void 0 : t.payload,
                  isLoading: !1,
                }
              );
            default:
              return e;
          }
        },
        Wn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { authData: null },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Te:
              return (
                localStorage.setItem(
                  "profile",
                  JSON.stringify(
                    Object(j.a)(
                      {},
                      null === t || void 0 === t ? void 0 : t.data
                    )
                  )
                ),
                Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { authData: null === t || void 0 === t ? void 0 : t.data }
                )
              );
            case Ae:
              return Object(j.a)(Object(j.a)({}, e), {}, { authData: null });
            case $e:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { authData: null === t || void 0 === t ? void 0 : t.data }
              );
            case qe:
              return (
                localStorage.setItem(
                  "profile",
                  JSON.stringify(
                    Object(j.a)(
                      {},
                      null === t || void 0 === t ? void 0 : t.userData
                    )
                  )
                ),
                Object(j.a)(
                  Object(j.a)({}, e),
                  {},
                  { authData: null === t || void 0 === t ? void 0 : t.userData }
                )
              );
            default:
              return e;
          }
        },
        Yn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    isLoading: !0,
                    notificationDetails: {},
                    showNotificationBadge: !1,
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ne:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !0 });
            case De:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !1 });
            case Ge:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { notificationDetails: t.payload, isLoading: !1 }
              );
            case Je:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { showNotificationBadge: t.payload, isLoading: !1 }
              );
            default:
              return e;
          }
        },
        Un = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    transaction: null,
                    wallet: [],
                    vendordue: [],
                    isLoading: !1,
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ne:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !0 });
            case De:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !1 });
            case Be:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { wallet: t.payload, isLoading: !1 }
              );
            case Qe:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { transaction: t.payload, isLoading: !1 }
              );
            default:
              return e;
          }
        },
        Mn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    DcidReport: [],
                    vendordueReport: [],
                    allVendors: [],
                    isLoading: !1,
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ne:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !0 });
            case De:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !1 });
            case Xe:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { DcidReport: t.payload, isLoading: !1 }
              );
            case Ke:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { vendordueReport: t.payload, isLoading: !1 }
              );
            case nt:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { allVendors: t.payload, isLoading: !1 }
              );
            default:
              return e;
          }
        },
        zn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    withdraws: null,
                    isLoading: !0,
                    isWithdrawUpdateLoading: !1,
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ze:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { withdraws: t.payload, isLoading: !1 }
              );
            case at:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { isWithdrawUpdateLoading: !0 }
              );
            case rt:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { isWithdrawUpdateLoading: !1 }
              );
            default:
              return e;
          }
        },
        qn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { vendorCreatedData: {}, isLoading: !1 },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ne:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !0 });
            case De:
              return Object(j.a)(Object(j.a)({}, e), {}, { isLoading: !1 });
            case et:
            case tt:
              return Object(j.a)(
                Object(j.a)({}, e),
                {},
                { vendorCreatedData: t.payload, isLoading: !1 }
              );
            default:
              return e;
          }
        },
        Hn = Object(En.b)({
          invoices: Vn,
          auth: Wn,
          notification: Yn,
          walletPayment: Un,
          reports: Mn,
          withdraw: zn,
          vendors: qn,
        }),
        $n = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || En.c,
        Gn = Object(En.d)(Hn, $n(Object(En.a)(Rn.a))),
        Jn = n(668),
        Qn = n(638),
        Kn = n(675),
        Xn = n(672),
        Zn = n(673),
        ea = n(674),
        ta = n(322),
        na = n(671),
        aa = n(655),
        ra = n(654),
        ca = n(656),
        ia = n(9),
        oa = n(520),
        sa = n(534),
        la = n(518),
        da = n(647),
        ua = n(521),
        ja = { role: "", firstName: "", lastName: "", email: "", dcIds: [] },
        ba = Object(ta.a)(),
        pa = W.d({
          role: W.e().required("Role is required"),
          firstName: W.e("Enter first name").required("First name is required"),
          lastName: W.e("Enter last name").required("Last name is required"),
          email: W.e("Enter email")
            .email("Enter a valid email")
            .required("Email is required"),
          dcIds: W.a().required("DC Id is required"),
        }),
        ha = Object(ia.a)("div")(function (e) {
          var t = e.theme;
          return Object(j.a)(
            Object(j.a)({}, t.typography.button),
            {},
            {
              backgroundColor: t.palette.background.paper,
              padding: t.spacing(1),
            }
          );
        });
      function ma() {
        var e = Object(p.b)(),
          t = Object(d.b)(),
          n = Object(o.a)(t, 1)[0];
        Object(a.useEffect)(
          function () {
            e(it());
          },
          [e]
        );
        var c = Object(h.d)({
            initialValues: ja,
            validationSchema: pa,
            onSubmit: function (e) {
              g(e);
            },
          }),
          i = Object(a.useState)(!1),
          s = Object(o.a)(i, 2),
          l = s[0],
          u = s[1],
          b = Object(a.useState)(!1),
          m = Object(o.a)(b, 2),
          x = m[0],
          v = m[1],
          O = Object(p.c)(function (e) {
            return e.invoices.DCid;
          }),
          f = {
            options: xa,
            getOptionLabel: function (e) {
              return e.title;
            },
          },
          g = function (t) {
            e(
              (function (e, t, n, a, r) {
                return (function () {
                  var c = Object(J.a)(
                    K.a.mark(function c(i) {
                      var o, s, l, d;
                      return K.a.wrap(
                        function (c) {
                          for (;;)
                            switch ((c.prev = c.next)) {
                              case 0:
                                return (
                                  (c.prev = 0),
                                  (c.next = 3),
                                  (u = e),
                                  ne.post("v1/auth/create/user", u)
                                );
                              case 3:
                                (o = c.sent),
                                  (s = o.data),
                                  i({ type: $e, payload: s }),
                                  t("User Created"),
                                  n(!1),
                                  a(!0),
                                  r.resetForm(),
                                  (c.next = 17);
                                break;
                              case 12:
                                (c.prev = 12),
                                  (c.t0 = c.catch(0)),
                                  401 === c.t0.response.data.code &&
                                    (localStorage.removeItem("profile"),
                                    window.location.reload()),
                                  console.log(
                                    null === c.t0 ||
                                      void 0 === c.t0 ||
                                      null === (l = c.t0.response) ||
                                      void 0 === l ||
                                      null === (d = l.data) ||
                                      void 0 === d
                                      ? void 0
                                      : d.message
                                  ),
                                  n(!1);
                              case 17:
                              case "end":
                                return c.stop();
                            }
                          var u;
                        },
                        c,
                        null,
                        [[0, 12]]
                      );
                    })
                  );
                  return function (e) {
                    return c.apply(this, arguments);
                  };
                })();
              })(t, n, u, v, c)
            ),
              u(!0);
          };
        return Object(xt.jsxs)(na.a, {
          theme: ba,
          children: [
            Object(xt.jsx)(Qn.a, {}),
            Object(xt.jsx)(Xn.a, {
              component: "main",
              maxWidth: "sm",
              sx: { mb: 4 },
              children: Object(xt.jsxs)(Zn.a, {
                variant: "outlined",
                sx: { my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } },
                children: [
                  Object(xt.jsx)(ea.a, {
                    component: "h1",
                    variant: "h4",
                    align: "center",
                    children: "Create User",
                  }),
                  Object(xt.jsx)(r.a.Fragment, {
                    children: Object(xt.jsx)("form", {
                      onSubmit: c.handleSubmit,
                      children: x
                        ? Object(xt.jsx)(r.a.Fragment, {
                            children: Object(xt.jsx)(Jn.a, {
                              container: !0,
                              spacing: 3,
                              children: Object(xt.jsxs)(Jn.a, {
                                item: !0,
                                xs: 12,
                                md: 12,
                                children: [
                                  Object(xt.jsx)(ea.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    align: "center",
                                    children: Object(xt.jsx)(ha, {
                                      children: "New User is Created",
                                    }),
                                  }),
                                  Object(xt.jsx)(Kn.a, {
                                    textAlign: "center",
                                    children: Object(xt.jsx)(on.a, {
                                      align: "center",
                                      variant: "contained",
                                      onClick: function () {
                                        return v(!1);
                                      },
                                      sx: { mt: 3, ml: 1 },
                                      children: "Create Another User",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          })
                        : Object(xt.jsxs)(r.a.Fragment, {
                            children: [
                              Object(xt.jsx)(r.a.Fragment, {
                                children: Object(xt.jsxs)(Jn.a, {
                                  container: !0,
                                  spacing: 3,
                                  children: [
                                    Object(xt.jsx)(Jn.a, {
                                      item: !0,
                                      xs: 12,
                                      md: 12,
                                      marginTop: "20px",
                                      children: Object(xt.jsx)(
                                        ca.a,
                                        Object(j.a)(
                                          Object(j.a)({}, f),
                                          {},
                                          {
                                            id: "role",
                                            name: "role",
                                            onChange: function (e, t) {
                                              return c.setFieldValue(
                                                "role",
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.id
                                              );
                                            },
                                            onBlur: function () {
                                              return c.setTouched(
                                                Object(j.a)(
                                                  Object(j.a)({}, c.touched),
                                                  {},
                                                  { role: !0 }
                                                )
                                              );
                                            },
                                            renderInput: function (e) {
                                              return Object(xt.jsx)(
                                                aa.a,
                                                Object(j.a)(
                                                  Object(j.a)({}, e),
                                                  {},
                                                  {
                                                    error:
                                                      c.touched.role &&
                                                      Boolean(c.errors.role),
                                                    helperText:
                                                      c.touched.role &&
                                                      c.errors.role,
                                                    name: "role",
                                                    label: "Select Role",
                                                    variant: "standard",
                                                  }
                                                )
                                              );
                                            },
                                          }
                                        )
                                      ),
                                    }),
                                    Object(xt.jsx)(Jn.a, {
                                      item: !0,
                                      xs: 12,
                                      sm: 6,
                                      children: Object(xt.jsx)(aa.a, {
                                        id: "firstName",
                                        name: "firstName",
                                        label: "First name",
                                        fullWidth: !0,
                                        value: c.values.firstName,
                                        onChange: c.handleChange,
                                        error:
                                          c.touched.firstName &&
                                          Boolean(c.errors.firstName),
                                        helperText:
                                          c.touched.firstName &&
                                          c.errors.firstName,
                                        variant: "standard",
                                      }),
                                    }),
                                    Object(xt.jsx)(Jn.a, {
                                      item: !0,
                                      xs: 12,
                                      sm: 6,
                                      children: Object(xt.jsx)(aa.a, {
                                        id: "lastName",
                                        name: "lastName",
                                        label: "Last name",
                                        fullWidth: !0,
                                        value: c.values.lastName,
                                        onChange: c.handleChange,
                                        error:
                                          c.touched.lastName &&
                                          Boolean(c.errors.lastName),
                                        helperText:
                                          c.touched.lastName &&
                                          c.errors.lastName,
                                        variant: "standard",
                                      }),
                                    }),
                                    Object(xt.jsx)(Jn.a, {
                                      item: !0,
                                      xs: 12,
                                      children: Object(xt.jsx)(aa.a, {
                                        id: "email",
                                        name: "email",
                                        label: "Email",
                                        fullWidth: !0,
                                        value: c.values.email,
                                        onChange: c.handleChange,
                                        error:
                                          c.touched.email && c.errors.email,
                                        helperText:
                                          c.touched.email && c.errors.email,
                                        autoComplete: "email",
                                        variant: "standard",
                                      }),
                                    }),
                                    Object(xt.jsx)(Jn.a, {
                                      item: !0,
                                      xs: 12,
                                      children: Object(xt.jsxs)(oa.a, {
                                        fullWidth: !0,
                                        error:
                                          c.touched.dcIds &&
                                          !c.values.dcIds.length,
                                        children: [
                                          Object(xt.jsx)(sa.a, {
                                            id: "dcId",
                                            children: "Select DC Ids",
                                          }),
                                          Object(xt.jsx)(ra.a, {
                                            label: "dcId",
                                            id: "dcIds",
                                            name: "dcIds",
                                            fullWidth: !0,
                                            multiple: !0,
                                            value: c.values.dcIds,
                                            onChange: function (e) {
                                              return c.setFieldValue(
                                                "dcIds",
                                                "string" ===
                                                  typeof e.target.value
                                                  ? e.target.value.split(",")
                                                  : e.target.value
                                              );
                                            },
                                            onBlur: function () {
                                              return c.setTouched(
                                                Object(j.a)(
                                                  Object(j.a)({}, c.touched),
                                                  {},
                                                  { dcIds: !0 }
                                                )
                                              );
                                            },
                                            input: Object(xt.jsx)(la.a, {}),
                                            renderValue: function (e) {
                                              return e
                                                .map(function (e, t) {
                                                  return O[t].dc_name;
                                                })
                                                .join(", ");
                                            },
                                            children: O.map(function (e) {
                                              return Object(xt.jsx)(
                                                yn.a,
                                                {
                                                  value: e.id,
                                                  children: Object(xt.jsx)(
                                                    da.a,
                                                    { primary: e.dc_name }
                                                  ),
                                                },
                                                e.id
                                              );
                                            }),
                                          }),
                                          Object(xt.jsx)(ua.a, {
                                            children:
                                              c.touched.dcIds &&
                                              !c.values.dcIds.length &&
                                              "Atleast one dc id is required",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              Object(xt.jsx)(Kn.a, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "flex-end",
                                },
                                style: { marginTop: "20px" },
                                children: Object(xt.jsx)(on.a, {
                                  type: "submit",
                                  variant: "contained",
                                  sx: { mt: 3, ml: 1 },
                                  children: l
                                    ? Object(xt.jsx)(St.a, {
                                        color: "info",
                                        size: 25,
                                        thickness: 4,
                                        sx: { mt: 3, ml: 1 },
                                      })
                                    : "Create",
                                }),
                              }),
                            ],
                          }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var xa = [
          { title: "Vendor", id: "vendor" },
          { title: "Site Manager", id: "siteManager" },
          { title: "Accountant", id: "accountant" },
          { title: "Admin", id: "admin" },
        ],
        va = n(143),
        Oa = n.n(va),
        fa = n(648),
        ga = function () {
          return (function () {
            var e = Object(J.a)(
              K.a.mark(function e(t) {
                var n, a;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: Ne }),
                            (e.next = 4),
                            "admin" === ee.user.role ||
                            "superAdmin" === ee.user.role
                              ? ne.get("v1/wallet/company")
                              : "vendor" === ee.user.role
                              ? ne.get("v1/wallet/vendor")
                              : void 0
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: Be, payload: a }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            401 === e.t0.response.data.code &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        ya = function () {
          var e = Object(p.b)(),
            t = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t
                ? void 0
                : t.wallet;
            });
          Object(a.useEffect)(
            function () {
              e(ga());
            },
            [e]
          );
          var n = function () {
              var t;
              e(
                ((t = window.location.href),
                Object(J.a)(
                  K.a.mark(function e() {
                    var n, a;
                    return K.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), ce(t);
                            case 3:
                              (n = e.sent),
                                (a = n.data),
                                window.location.replace(a.url),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                401 === e.t0.response.data.code &&
                                  (localStorage.removeItem("profile"),
                                  window.location.reload()),
                                console.log(e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                ))
              );
            },
            r = function () {
              var t;
              e(
                ((t = window.location.href),
                Object(J.a)(
                  K.a.mark(function e() {
                    var n, a;
                    return K.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), re(t);
                            case 3:
                              (n = e.sent),
                                (a = n.data),
                                window.location.replace(a.url),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                401 === e.t0.response.data.code &&
                                  (localStorage.removeItem("profile"),
                                  window.location.reload()),
                                console.log(e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                ))
              );
            };
          return Object(xt.jsx)(xt.Fragment, {
            children: Object(xt.jsx)(Ct.a, {
              style: { marginTop: "75px" },
              children: Object(xt.jsxs)("div", {
                className: Oa.a.accountLayout,
                children: [
                  Object(xt.jsx)(g.a, {
                    container: !0,
                    spacing: 2,
                    children: Object(xt.jsx)(g.a, {
                      item: !0,
                      xs: 6,
                      children: Object(xt.jsx)("h3", {
                        style: { color: "rgb(25, 118, 210)" },
                        children: "Bank Accounts",
                      }),
                    }),
                  }),
                  Object(xt.jsxs)(g.a, {
                    container: !0,
                    spacing: 2,
                    children: [
                      Object(xt.jsxs)("div", {
                        className: Oa.a.accountLayoutContainer,
                        children: [
                          Object(xt.jsx)("br", {}),
                          Object(xt.jsx)(P.a, {
                            onClick: function () {
                              r();
                            },
                            children: Object(xt.jsx)(fa.a, {}),
                          }),
                          Object(xt.jsx)("p", { children: "Add Bank Account" }),
                        ],
                      }),
                      (null === t || void 0 === t ? void 0 : t.achData) &&
                        t.achData.map(function (e) {
                          var t, n;
                          return Object(xt.jsxs)(
                            "div",
                            {
                              className: Oa.a.accountLayoutContainer,
                              children: [
                                Object(xt.jsx)("br", {}),
                                Object(xt.jsx)("p", {
                                  children:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.bank) ||
                                    void 0 === t
                                      ? void 0
                                      : t.name,
                                }),
                                Object(xt.jsx)("p", {
                                  children:
                                    null === e ||
                                    void 0 === e ||
                                    null === (n = e.account) ||
                                    void 0 === n
                                      ? void 0
                                      : n.accountNumber.replace(
                                          /\d(?=\d{4})/g,
                                          "*"
                                        ),
                                }),
                              ],
                            },
                            null === e || void 0 === e ? void 0 : e._id
                          );
                        }),
                    ],
                  }),
                  Object(xt.jsx)("br", {}),
                  Object(xt.jsx)(g.a, {
                    container: !0,
                    spacing: 2,
                    children: Object(xt.jsx)(g.a, {
                      item: !0,
                      xs: 6,
                      children: Object(xt.jsx)("h3", {
                        style: { color: "rgb(25, 118, 210)" },
                        children: "PayPal Accounts",
                      }),
                    }),
                  }),
                  Object(xt.jsxs)(g.a, {
                    container: !0,
                    spacing: 2,
                    children: [
                      Object(xt.jsxs)("div", {
                        className: Oa.a.accountLayoutContainer,
                        children: [
                          Object(xt.jsx)("br", {}),
                          Object(xt.jsx)(P.a, {
                            onClick: function () {
                              return n();
                            },
                            children: Object(xt.jsx)(fa.a, {}),
                          }),
                          Object(xt.jsx)("p", {
                            children: "Add Paypal Account",
                          }),
                        ],
                      }),
                      (null === t || void 0 === t ? void 0 : t.paypalData) &&
                        t.paypalData.map(function (e) {
                          return Object(xt.jsxs)(
                            "div",
                            {
                              className: Oa.a.accountLayoutContainer,
                              children: [
                                Object(xt.jsx)("br", {}),
                                Object(xt.jsxs)("p", {
                                  children: [
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.firstName,
                                    " ",
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.lastName,
                                  ],
                                }),
                                Object(xt.jsx)("p", {
                                  children:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.email,
                                }),
                              ],
                            },
                            null === e || void 0 === e ? void 0 : e._id
                          );
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        wa = n(677),
        Ca = n(678),
        Ia = Object(x.a)(function (e) {
          return {
            table: { minWidth: 500 },
            headerContainer: {
              display: "flex",
              paddingTop: e.spacing(1),
              paddingLeft: "0",
              paddingRight: "0",
              background: "#FFFFFF",
            },
          };
        }),
        _a = function () {
          var e = Object(p.b)(),
            t = Object(l.h)(),
            n = Object(l.g)(),
            c = Object(p.c)(function (e) {
              var t, n;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t ||
                null === (n = t.wallet) ||
                void 0 === n
                ? void 0
                : n.availableBalance;
            }),
            i = Object(p.c)(function (e) {
              var t, n;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t ||
                null === (n = t.wallet) ||
                void 0 === n
                ? void 0
                : n.totalWithdraw;
            }),
            o = Object(p.c)(function (e) {
              var t, n, a;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t ||
                null === (n = t.wallet) ||
                void 0 === n ||
                null === (a = n.recentTransactions) ||
                void 0 === a
                ? void 0
                : a.reverse();
            }),
            s = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t
                ? void 0
                : t.isLoading;
            });
          Object(a.useEffect)(
            function () {
              e(ga());
            },
            [t]
          );
          var d = Ia();
          return (
            ee || n.push("/"),
            Object(xt.jsx)(r.a.Fragment, {
              children: Object(xt.jsxs)(Ct.a, {
                children: [
                  Object(xt.jsxs)(g.a, {
                    container: !0,
                    justifyContent: "space-between",
                    children: [
                      Object(xt.jsx)(g.a, {
                        children: Object(xt.jsx)(wa.a, {
                          children: Object(xt.jsx)(Ca.a, {
                            children: Object(xt.jsx)("div", {
                              children: Object(xt.jsxs)("div", {
                                children: [
                                  Object(xt.jsxs)(O.a, {
                                    variant: "h6",
                                    style: { fontSize: "30px" },
                                    children: [
                                      "$",
                                      s
                                        ? Object(xt.jsx)(St.a, {
                                            style: { marginLeft: "5px" },
                                            size: 25,
                                            thickness: 4,
                                            sx: { mt: 3, ml: 1 },
                                          })
                                        : c
                                        ? parseFloat(c).toFixed(2)
                                        : (0).toFixed(2),
                                    ],
                                  }),
                                  Object(xt.jsx)(O.a, {
                                    variant: "subtitle1",
                                    children: "Balance",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                      "vendor" === ee.user.role &&
                        Object(xt.jsx)(g.a, {
                          children: Object(xt.jsx)(wa.a, {
                            children: Object(xt.jsx)(Ca.a, {
                              children: Object(xt.jsx)("div", {
                                children: Object(xt.jsxs)("div", {
                                  children: [
                                    Object(xt.jsxs)(O.a, {
                                      variant: "h6",
                                      style: { fontSize: "30px" },
                                      children: [
                                        "$",
                                        s
                                          ? Object(xt.jsx)(St.a, {
                                              style: { marginLeft: "5px" },
                                              size: 25,
                                              thickness: 4,
                                              sx: { mt: 3, ml: 1 },
                                            })
                                          : i
                                          ? parseFloat(i).toFixed(2)
                                          : (0).toFixed(2),
                                      ],
                                    }),
                                    Object(xt.jsx)(O.a, {
                                      variant: "subtitle1",
                                      children: "Withdraw",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  Object(xt.jsxs)(g.a, {
                    container: !0,
                    justifyContent: "space-between",
                    className: d.headerContainer,
                    style: { padding: "2%" },
                    children: [
                      Object(xt.jsx)(g.a, {}),
                      Object(xt.jsx)(g.a, {
                        children: Object(xt.jsx)("h1", {
                          children: "Recent Transactions",
                        }),
                      }),
                      Object(xt.jsx)(g.a, {
                        children:
                          ("admin" === ee.user.role ||
                            "superAdmin" === ee.user.role) &&
                          Object(xt.jsx)(P.a, {
                            variant: "contained",
                            color: "default",
                            onClick: function () {
                              return n.push("/add-wallet-payment");
                            },
                            style: { marginLeft: "5px" },
                            children: "Fund Wallet",
                          }),
                      }),
                    ],
                  }),
                  Object(xt.jsx)(y.a, {}),
                  Object(xt.jsxs)(_.a, {
                    sx: { minWidth: 650 },
                    "aria-label": "simple table",
                    children: [
                      Object(xt.jsx)(S.a, {
                        children: Object(xt.jsxs)(k.a, {
                          children: [
                            Object(xt.jsx)(N.a, {
                              align: "center",
                              width: 300,
                              children: "Invoice Number/Transfer Ref No",
                            }),
                            Object(xt.jsx)(N.a, {
                              align: "center",
                              width: 300,
                              children: "Date",
                            }),
                            Object(xt.jsx)(N.a, {
                              align: "right",
                              width: 300,
                              children: "Amount",
                            }),
                            Object(xt.jsx)(N.a, {
                              align: "center",
                              width: 300,
                              children: "Type",
                            }),
                          ],
                        }),
                      }),
                      Object(xt.jsx)(D.a, {
                        children: s
                          ? Object(xt.jsx)(k.a, {
                              sx: { "& > *": { borderBottom: "unset" } },
                              children: Object(xt.jsx)(N.a, {
                                scope: "row",
                                width: 300,
                                style: { fontSize: 16 },
                                colSpan: 4,
                                align: "center",
                                children: Object(xt.jsx)(St.a, {
                                  size: 25,
                                  thickness: 4,
                                  sx: { mt: 3, ml: 1 },
                                }),
                              }),
                            })
                          : o
                          ? o.map(function (e) {
                              return Object(xt.jsxs)(k.a, {
                                children: [
                                  Object(xt.jsx)(N.a, {
                                    align: "center",
                                    children: e.invoiceNumber
                                      ? e.invoiceNumber
                                      : e.transferRefNo,
                                  }),
                                  Object(xt.jsx)(N.a, {
                                    align: "center",
                                    children: ut()(e.date).format(
                                      "DD-MM-YYYY hh:mm a "
                                    ),
                                  }),
                                  Object(xt.jsxs)(N.a, {
                                    align: "right",
                                    children: ["$", e.amount.toFixed(2)],
                                  }),
                                  Object(xt.jsx)(N.a, {
                                    align: "center",
                                    children: e.status
                                      ? ""
                                          .concat(
                                            e.transactionType.toUpperCase(),
                                            "("
                                          )
                                          .concat(e.status, ")")
                                      : e.transactionType.toUpperCase(),
                                  }),
                                ],
                              });
                            })
                          : Object(xt.jsx)(k.a, {
                              children: Object(xt.jsx)(N.a, {
                                colSpan: 12,
                                align: "center",
                                children: "No Recent Transaction",
                              }),
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Sa = n(314),
        ka = n.n(Sa),
        Na = W.d({ amount: W.c().min(5).required("Amount is required") }),
        Da = function () {
          var e = Object(p.b)(),
            t = Object(h.d)({
              initialValues: { amount: 0 },
              validationSchema: Na,
              onSubmit: function (e) {
                n(e);
              },
            }),
            n = function (t) {
              var n = {
                amount: t.amount,
                redirect_success_url:
                  window.location.origin + "/payment-verification",
                redirect_failure_url:
                  window.location.origin + "/payment-failed",
              };
              e(
                (function (e) {
                  return (function () {
                    var t = Object(J.a)(
                      K.a.mark(function t(n) {
                        var a, r;
                        return K.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.prev = 0), (t.next = 3), Oe(e);
                                case 3:
                                  (a = t.sent),
                                    (r = a.data),
                                    window.location.replace(r.url),
                                    n({ type: Le, payload: r }),
                                    (t.next = 13);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    401 === t.t0.response.data.code &&
                                      (localStorage.removeItem("profile"),
                                      window.location.reload()),
                                    console.log(t.t0);
                                case 13:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })();
                })(n)
              );
            };
          return Object(xt.jsx)(Ct.a, {
            children: Object(xt.jsx)("div", {
              className: ka.a.invoiceLayout,
              children: Object(xt.jsxs)("form", {
                onSubmit: t.handleSubmit,
                children: [
                  Object(xt.jsx)("h3", { children: "Amount" }),
                  Object(xt.jsx)(g.a, {
                    item: !0,
                    style: { paddingTop: "25px", paddingBottom: "25px" },
                    children: Object(xt.jsx)(w.a, {
                      type: "number",
                      name: "amount",
                      value: t.values.amount,
                      onChange: t.handleChange,
                      error: t.touched.amount && Boolean(t.errors.amount),
                      helperText: t.touched.amount && t.errors.amount,
                      style: { width: "50%" },
                    }),
                  }),
                  Object(xt.jsx)(g.a, {
                    item: !0,
                    style: { paddingTop: "25px", paddingBottom: "25px" },
                    children: Object(xt.jsx)(P.a, {
                      type: "submit",
                      variant: "contained",
                      sx: { mt: 3, ml: 1 },
                      children: t.isSubmitting
                        ? Object(xt.jsx)(St.a, {
                            color: "primary",
                            size: 25,
                            thickness: 4,
                            sx: { mt: 3, ml: 1 },
                          })
                        : "Add",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Ta = function () {
          var e = Object(a.useState)(!0),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1];
          return (
            Object(a.useEffect)(function () {
              window.socket_client.on(
                "".concat(ee.user.role, "/walletData"),
                function (e) {
                  r(!1);
                }
              ),
                localStorage.setItem("url", window.location.pathname);
            }, []),
            Object(xt.jsx)("div", {
              style: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              },
              children: n
                ? Object(xt.jsxs)(xt.Fragment, {
                    children: [
                      Object(xt.jsx)(O.a, {
                        style: { margin: 10 },
                        variant: "h2",
                        component: "h2",
                        children: "Verifying Payment...",
                      }),
                      Object(xt.jsx)(St.a, {}),
                    ],
                  })
                : Object(xt.jsxs)(xt.Fragment, {
                    children: [
                      Object(xt.jsx)(O.a, {
                        style: { margin: 10 },
                        variant: "h2",
                        component: "h2",
                        children: "Balance added Successfully...",
                      }),
                      Object(xt.jsx)(P.a, {
                        onClick: function () {
                          return (window.location.href = "/dashboard");
                        },
                        variant: "contained",
                        size: "large",
                        color: "primary",
                        children: "Back to Dashboard",
                      }),
                    ],
                  }),
            })
          );
        },
        Pa = function () {
          return Object(xt.jsx)("div", {
            style: {
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            },
            children: Object(xt.jsxs)(xt.Fragment, {
              children: [
                Object(xt.jsx)(O.a, {
                  style: { margin: 10 },
                  variant: "h2",
                  component: "h2",
                  children: "payment failed, try again...",
                }),
                Object(xt.jsx)(P.a, {
                  onClick: function () {
                    return (window.location.href = "/dashboard");
                  },
                  variant: "contained",
                  size: "large",
                  color: "primary",
                  children: "Back to Dashboard",
                }),
              ],
            }),
          });
        },
        Aa = n(688),
        Ba = n(651),
        Fa = n(315),
        La = n(652),
        Ea = function () {
          var e,
            t = Object(p.b)(),
            n = Object(l.g)(),
            c = Object(p.c)(function (e) {
              return null === e || void 0 === e
                ? void 0
                : e.walletPayment.transaction;
            }),
            i = Object(p.c)(function (e) {
              return null === e || void 0 === e
                ? void 0
                : e.walletPayment.isLoading;
            }),
            s = Object(a.useState)(0),
            d = Object(o.a)(s, 2),
            u = d[0],
            b = d[1],
            h = Object(a.useState)(10),
            x = Object(o.a)(h, 2),
            v = x[0],
            O = x[1],
            f = Object(a.useState)(ut()(new Date()).format("YYYY")),
            I = Object(o.a)(f, 2),
            T = I[0],
            P = I[1],
            A = Object(a.useState)(ut()().format("MM")),
            B = Object(o.a)(A, 2),
            F = B[0],
            L = B[1],
            E = Object(a.useState)(),
            R = Object(o.a)(E, 2),
            V = R[0],
            W = R[1];
          Object(a.useEffect)(
            function () {
              var e,
                n = { month: F, year: T, limit: v, offset: u + 1 };
              V && (n.transactionType = V),
                t(
                  ((e = n),
                  (function () {
                    var t = Object(J.a)(
                      K.a.mark(function t(n) {
                        var a, r;
                        return K.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    n({ type: Ne }),
                                    (t.next = 4),
                                    ye(e)
                                  );
                                case 4:
                                  (a = t.sent),
                                    (r = a.data),
                                    n({ type: Qe, payload: r }),
                                    n({ type: De }),
                                    (t.next = 14);
                                  break;
                                case 10:
                                  (t.prev = 10),
                                    (t.t0 = t.catch(0)),
                                    401 === t.t0.response.data.code &&
                                      (localStorage.removeItem("profile"),
                                      window.location.reload()),
                                    console.log(t.t0);
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                );
            },
            [F, T, v, V, u]
          );
          ee || n.push("/");
          var Y = [
              { title: "Sent", id: "sent", onlyVendor: !1 },
              { title: "Received", id: "received", onlyVendor: !0 },
              { title: "Refund", id: "refund", onlyVendor: !0 },
              { title: "Withdraw", id: "withdraw", onlyVendor: !0 },
              { title: "Added", id: "added", onlyVendor: !1 },
            ],
            U = [
              { title: "January", id: "01" },
              { title: "February", id: "02" },
              { title: "March", id: "03" },
              { title: "April", id: "04" },
              { title: "May", id: "05" },
              { title: "June", id: "06" },
              { title: "July", id: "07" },
              { title: "August", id: "08" },
              { title: "September", id: "09" },
              { title: "October", id: "10" },
              { title: "November", id: "11" },
              { title: "December", id: "12" },
            ],
            M = {
              options:
                "vendor" === ee.user.role
                  ? Y.filter(function (e) {
                      return e.onlyVendor;
                    })
                  : Y.filter(function (e) {
                      return !e.onlyVendor;
                    }),
              getOptionLabel: function (e) {
                return e.title;
              },
            },
            z = {
              options: U,
              getOptionLabel: function (e) {
                return e.title;
              },
            };
          return Object(xt.jsx)(r.a.Fragment, {
            children: Object(xt.jsxs)(Ct.a, {
              style: { marginTop: "75px" },
              children: [
                Object(xt.jsxs)(g.a, {
                  container: !0,
                  justifyContent: "space-between",
                  style: { padding: "2%", backgroundColor: "#fff" },
                  children: [
                    Object(xt.jsx)(g.a, {}),
                    Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)("h1", {
                        children: "Transaction History",
                      }),
                    }),
                    Object(xt.jsx)(g.a, {}),
                  ],
                }),
                Object(xt.jsx)(y.a, {}),
                Object(xt.jsxs)(g.a, {
                  container: !0,
                  justifyContent: "space-between",
                  style: { padding: "2%", backgroundColor: "#fff" },
                  children: [
                    Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)(
                        m.a,
                        Object(j.a)(
                          Object(j.a)(
                            {
                              style: { width: "200px" },
                              label: "Select Month",
                            },
                            z
                          ),
                          {},
                          {
                            defaultValue: U.find(function (e) {
                              return e.id === ut()().format("MM");
                            }),
                            disableClearable: !0,
                            renderInput: function (e) {
                              return Object(xt.jsx)(
                                w.a,
                                Object(j.a)(
                                  Object(j.a)({}, e),
                                  {},
                                  {
                                    placeholder: "Select Month",
                                    variant: "outlined",
                                  }
                                )
                              );
                            },
                            onChange: function (e, t) {
                              null !== t &&
                                L(null === t || void 0 === t ? void 0 : t.id);
                            },
                          }
                        )
                      ),
                    }),
                    Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)(Fa.a, {
                        dateAdapter: Ba.a,
                        children: Object(xt.jsx)(La.a, {
                          views: ["year"],
                          label: " Select Year",
                          disableClearable: !0,
                          value: T,
                          onChange: function (e) {
                            P(
                              e
                                ? ut()(e).format("YYYY")
                                : ut()(new Date()).format("YYYY")
                            );
                          },
                          renderInput: function (e) {
                            return Object(xt.jsx)(
                              w.a,
                              Object(j.a)(
                                Object(j.a)({}, e),
                                {},
                                { variant: "outlined" }
                              )
                            );
                          },
                        }),
                      }),
                    }),
                    Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)(
                        m.a,
                        Object(j.a)(
                          Object(j.a)(
                            {
                              style: { width: "200px" },
                              label: "Select Transaction type",
                              renderInput: function (e) {
                                return Object(xt.jsx)(
                                  w.a,
                                  Object(j.a)(
                                    Object(j.a)({}, e),
                                    {},
                                    {
                                      placeholder: "Select Transaction type",
                                      variant: "outlined",
                                    }
                                  )
                                );
                              },
                            },
                            M
                          ),
                          {},
                          {
                            onChange: function (e, t) {
                              W(
                                null !== t && void 0 !== t && t.id
                                  ? null === t || void 0 === t
                                    ? void 0
                                    : t.id
                                  : null
                              );
                            },
                          }
                        )
                      ),
                    }),
                  ],
                }),
                Object(xt.jsx)(y.a, {}),
                Object(xt.jsx)(C.a, {
                  children: Object(xt.jsxs)(_.a, {
                    "aria-label": "collapsible table",
                    children: [
                      Object(xt.jsx)(S.a, {
                        children: Object(xt.jsxs)(k.a, {
                          children: [
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "180px" },
                              align: "center",
                              children: "Date",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "120px" },
                              align: "center",
                              children: "Transaction Type",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "120px" },
                              align: "right",
                              children: "Total Amount",
                            }),
                          ],
                        }),
                      }),
                      Object(xt.jsx)(D.a, {
                        children:
                          (c &&
                            (null === c || void 0 === c
                              ? void 0
                              : c.resultData.length) > 0) ||
                          i
                            ? i
                              ? Object(xt.jsx)(k.a, {
                                  sx: { "& > *": { borderBottom: "unset" } },
                                  children: Object(xt.jsx)(N.a, {
                                    scope: "row",
                                    width: 300,
                                    style: { fontSize: 16 },
                                    colSpan: 3,
                                    align: "center",
                                    children: Object(xt.jsx)(St.a, {
                                      size: 25,
                                      thickness: 4,
                                      sx: { mt: 3, ml: 1 },
                                    }),
                                  }),
                                })
                              : null === (e = c.resultData) || void 0 === e
                              ? void 0
                              : e.map(function (e) {
                                  return Object(xt.jsxs)(k.a, {
                                    children: [
                                      Object(xt.jsx)(N.a, {
                                        align: "center",
                                        scope: "row",
                                        style: { fontSize: 16 },
                                        width: 300,
                                        children: ut()(e.date).format(
                                          "DD-MM-YYYY"
                                        ),
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        width: 300,
                                        align: "center",
                                        children: Object(xt.jsx)(Aa.a, {
                                          label: Object(xt.jsx)("b", {
                                            children:
                                              e.transactionType.toUpperCase(),
                                          }),
                                          color: "primary",
                                          style: {
                                            backgroundColor:
                                              "added" === e.transactionType ||
                                              "refund" === e.transactionType ||
                                              "received" === e.transactionType
                                                ? "green"
                                                : "#db3236",
                                          },
                                        }),
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        width: 300,
                                        align: "right",
                                        style: {
                                          color:
                                            "added" === e.transactionType ||
                                            "refund" === e.transactionType ||
                                            "received" === e.transactionType
                                              ? "green"
                                              : "#db3236",
                                        },
                                        children: Object(xt.jsxs)("b", {
                                          children: [
                                            "$",
                                            Number(e.amount).toFixed(2),
                                          ],
                                        }),
                                      }),
                                    ],
                                  });
                                })
                            : Object(xt.jsx)(k.a, {
                                children: Object(xt.jsx)(N.a, {
                                  colSpan: "vendor" === ee.user.role ? 14 : 16,
                                  align: "center",
                                  children: "No Data Found",
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                Object(xt.jsx)(_t.a, {
                  rowsPerPageOptions: [2, 10, 25, 100],
                  component: "div",
                  count:
                    null !== c && void 0 !== c && c.totalResults
                      ? null === c || void 0 === c
                        ? void 0
                        : c.totalResults
                      : 0,
                  rowsPerPage: v || 0,
                  page: u || 0,
                  onPageChange: function (e, t) {
                    b(t);
                  },
                  onRowsPerPageChange: function (e) {
                    O(+e.target.value), b(0);
                  },
                }),
              ],
            }),
          });
        },
        Ra = function () {
          var e,
            t = Object(p.b)(),
            n = Object(l.h)(),
            r = Object(l.g)(),
            c = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.invoices) ||
                void 0 === t
                ? void 0
                : t.customLineItem;
            }),
            i = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.invoices) ||
                void 0 === t
                ? void 0
                : t.isLoading;
            }),
            s = Object(d.b)(),
            u = Object(o.a)(s, 1)[0],
            j = Object(a.useState)(0),
            b = Object(o.a)(j, 2),
            h = b[0],
            m = b[1],
            x = Object(a.useState)(10),
            v = Object(o.a)(x, 2),
            O = v[0],
            w = v[1];
          ee || r.push("/");
          Object(a.useEffect)(
            function () {
              var e, n;
              t(
                ((e = O),
                (n = h + 1),
                (function () {
                  var t = Object(J.a)(
                    K.a.mark(function t(a) {
                      var r, c, i, o;
                      return K.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  a({ type: Ne }),
                                  (t.next = 4),
                                  se(e, n)
                                );
                              case 4:
                                (r = t.sent),
                                  (c = r.data),
                                  a({ type: Me, payload: c }),
                                  a({ type: De }),
                                  (t.next = 14);
                                break;
                              case 10:
                                (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  401 ===
                                    (null === t.t0 ||
                                    void 0 === t.t0 ||
                                    null === (i = t.t0.response) ||
                                    void 0 === i ||
                                    null === (o = i.data) ||
                                    void 0 === o
                                      ? void 0
                                      : o.code) &&
                                    (localStorage.removeItem("profile"),
                                    window.location.reload()),
                                  console.log(t.t0.response);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            [t, O, h, n]
          );
          var I = function (e, n) {
            t(
              (function (e, t) {
                return (function () {
                  var n = Object(J.a)(
                    K.a.mark(function n(a) {
                      var r, c;
                      return K.a.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (n.prev = 0), (n.next = 3), ue(e);
                              case 3:
                                a({ type: Re, payload: e }),
                                  t("Line Item deleted successfully"),
                                  window.location.reload(),
                                  (n.next = 12);
                                break;
                              case 8:
                                (n.prev = 8),
                                  (n.t0 = n.catch(0)),
                                  401 ===
                                    (null === n.t0 ||
                                    void 0 === n.t0 ||
                                    null === (r = n.t0.response) ||
                                    void 0 === r ||
                                    null === (c = r.data) ||
                                    void 0 === c
                                      ? void 0
                                      : c.code) &&
                                    (localStorage.removeItem("profile"),
                                    window.location.reload()),
                                  console.log(n.t0.response);
                              case 12:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })();
              })(e, n)
            );
          };
          return Object(xt.jsx)(xt.Fragment, {
            children: Object(xt.jsxs)(Ct.a, {
              style: { marginTop: "75px" },
              children: [
                Object(xt.jsxs)(g.a, {
                  container: !0,
                  justifyContent: "space-between",
                  style: { padding: "2%", backgroundColor: "#fff" },
                  children: [
                    Object(xt.jsx)(g.a, {
                      children: Object(xt.jsx)("h1", {
                        children: "Custom Line Item",
                      }),
                    }),
                    " ",
                    Object(xt.jsx)(g.a, {
                      item: !0,
                      children: Object(xt.jsx)(P.a, {
                        variant: "outlined",
                        color: "primary",
                        onClick: function () {
                          r.push("/add-custom-lineitem");
                        },
                        children: "Add",
                      }),
                    }),
                  ],
                }),
                Object(xt.jsx)(y.a, {}),
                Object(xt.jsx)(C.a, {
                  children: Object(xt.jsxs)(_.a, {
                    "aria-label": "collapsible table",
                    children: [
                      Object(xt.jsx)(S.a, {
                        children: Object(xt.jsxs)(k.a, {
                          children: [
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "220px" },
                              children: "Name",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "120px" },
                              children: "Custom Name",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "180px" },
                              children: "Vendor Email",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "120px" },
                              children: "Vendor Name",
                            }),
                            Object(xt.jsx)(N.a, {
                              style: { top: 57, minWidth: "40px" },
                              children: "Action",
                            }),
                          ],
                        }),
                      }),
                      Object(xt.jsx)(D.a, {
                        children: i
                          ? Object(xt.jsx)(k.a, {
                              sx: { "& > *": { borderBottom: "unset" } },
                              children: Object(xt.jsx)(N.a, {
                                scope: "row",
                                width: 300,
                                style: { fontSize: 16 },
                                colSpan: 5,
                                align: "center",
                                children: Object(xt.jsx)(St.a, {
                                  size: 25,
                                  thickness: 4,
                                  sx: { mt: 3, ml: 1 },
                                }),
                              }),
                            })
                          : (null === c || void 0 === c
                              ? void 0
                              : c.resultData.length) > 0
                          ? null === c ||
                            void 0 === c ||
                            null === (e = c.resultData) ||
                            void 0 === e
                            ? void 0
                            : e.map(function (e) {
                                var t, n, a, c;
                                return Object(xt.jsxs)(
                                  k.a,
                                  {
                                    children: [
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        style: { fontSize: 16 },
                                        children:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.lineItemId.name,
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        children:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.name,
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        children:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.vendorUserId.email,
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        children:
                                          (null === e ||
                                          void 0 === e ||
                                          null === (t = e.vendorUserId) ||
                                          void 0 === t ||
                                          null === (n = t.externalData) ||
                                          void 0 === n
                                            ? void 0
                                            : n.firstName) +
                                          " " +
                                          (null === e ||
                                          void 0 === e ||
                                          null === (a = e.vendorUserId) ||
                                          void 0 === a ||
                                          null === (c = a.externalData) ||
                                          void 0 === c
                                            ? void 0
                                            : c.lastName),
                                      }),
                                      Object(xt.jsx)(N.a, {
                                        scope: "row",
                                        children: Object(xt.jsxs)(xt.Fragment, {
                                          children: [
                                            Object(xt.jsx)(f.a, {
                                              title: "Edit Invoice",
                                              onClick: function () {
                                                return r.push({
                                                  pathname:
                                                    "/edit-custom-lineitem/".concat(
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e._id
                                                    ),
                                                  state: e,
                                                });
                                              },
                                              style: {
                                                color: "#80000094",
                                                cursor: "pointer",
                                              },
                                              children: Object(xt.jsx)(Nt.a, {
                                                style: {
                                                  width: "20px",
                                                  height: "20px",
                                                },
                                              }),
                                            }),
                                            Object(xt.jsx)(f.a, {
                                              title: "Delete Invoice",
                                              onClick: function () {
                                                return I(
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e._id,
                                                  u
                                                );
                                              },
                                              style: {
                                                color: "red",
                                                cursor: "pointer",
                                              },
                                              children: Object(xt.jsx)(G.a, {
                                                style: { width: "20px" },
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  null === e || void 0 === e ? void 0 : e._id
                                );
                              })
                          : Object(xt.jsx)(k.a, {
                              children: Object(xt.jsx)(N.a, {
                                colSpan: 5,
                                align: "center",
                                children: "No Data Found",
                              }),
                            }),
                      }),
                    ],
                  }),
                }),
                Object(xt.jsx)(_t.a, {
                  rowsPerPageOptions: [2, 10, 25, 100],
                  component: "div",
                  count:
                    null !== c && void 0 !== c && c.totalResults
                      ? null === c || void 0 === c
                        ? void 0
                        : c.totalResults
                      : 0,
                  rowsPerPage: O || 0,
                  page: h || 0,
                  onPageChange: function (e, t) {
                    m(t);
                  },
                  onRowsPerPageChange: function (e) {
                    w(+e.target.value), m(0);
                  },
                }),
              ],
            }),
          });
        },
        Va = Object(ta.a)(),
        Wa = W.d({
          name: W.e().required("Custom name is required"),
          lineItemId: W.e().required("Please select Line item"),
          vendorUserId: W.e().required("Please select Vendor user"),
        });
      function Ya() {
        var e,
          t,
          n,
          c,
          i,
          s,
          u,
          b,
          m,
          x,
          v = Object(l.g)(),
          O = Object(l.h)(),
          f = Object(p.b)(),
          g = Object(d.b)(),
          y = Object(o.a)(g, 1)[0],
          w = Object(p.c)(function (e) {
            return e.invoices.isLoading;
          }),
          C = Object(p.c)(function (e) {
            return e.invoices.itemList;
          }),
          I = Object(p.c)(function (e) {
            return e.invoices.getVendorList;
          });
        Object(a.useEffect)(
          function () {
            f(ot()),
              f(
                (function () {
                  var e = Object(J.a)(
                    K.a.mark(function e(t) {
                      var n, a, r, c;
                      return K.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  ne.get("/v1/vendor")
                                );
                              case 3:
                                (n = e.sent),
                                  (a = n.data),
                                  t({ type: ze, payload: a }),
                                  (e.next = 12);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(0)),
                                  401 ===
                                    (null === e.t0 ||
                                    void 0 === e.t0 ||
                                    null === (r = e.t0.response) ||
                                    void 0 === r ||
                                    null === (c = r.data) ||
                                    void 0 === c
                                      ? void 0
                                      : c.code) &&
                                    (localStorage.removeItem("profile"),
                                    window.location.reload()),
                                  console.log(e.t0);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
          },
          [f]
        );
        var _ = {
            options: C,
            getOptionLabel: function (e) {
              var t;
              return e.lineItemId
                ? null === (t = e.lineItemId) || void 0 === t
                  ? void 0
                  : t.name
                : null === e || void 0 === e
                ? void 0
                : e.name;
            },
          },
          S = {
            options: I,
            getOptionLabel: function (e) {
              var t, n;
              return e.vendorUserId
                ? e.vendorUserId.externalData.firstName +
                    " " +
                    e.vendorUserId.externalData.lastName
                : (null === e ||
                  void 0 === e ||
                  null === (t = e.externalData) ||
                  void 0 === t
                    ? void 0
                    : t.firstName) +
                    " " +
                    (null === e ||
                    void 0 === e ||
                    null === (n = e.externalData) ||
                    void 0 === n
                      ? void 0
                      : n.lastName);
            },
          },
          k = Object(h.d)({
            initialValues: {
              lineItemId:
                null !== O &&
                void 0 !== O &&
                null !== (e = O.state) &&
                void 0 !== e &&
                e.lineItemId
                  ? null === O ||
                    void 0 === O ||
                    null === (t = O.state) ||
                    void 0 === t
                    ? void 0
                    : t.lineItemId.id
                  : "",
              vendorUserId:
                null !== O &&
                void 0 !== O &&
                null !== (n = O.state) &&
                void 0 !== n &&
                n.vendorUserId
                  ? null === O ||
                    void 0 === O ||
                    null === (c = O.state) ||
                    void 0 === c
                    ? void 0
                    : c.vendorUserId.id
                  : "",
              name:
                null !== O &&
                void 0 !== O &&
                null !== (i = O.state) &&
                void 0 !== i &&
                i.name
                  ? null === O ||
                    void 0 === O ||
                    null === (s = O.state) ||
                    void 0 === s
                    ? void 0
                    : s.name
                  : "",
            },
            validationSchema: Wa,
            onSubmit: function (e) {
              f(
                (function (e, t, n) {
                  return (function () {
                    var a = Object(J.a)(
                      K.a.mark(function a(r) {
                        var c, i, o, s, l, d;
                        return K.a.wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    r({ type: Ne }),
                                    (a.next = 4),
                                    fe(e)
                                  );
                                case 4:
                                  (c = a.sent),
                                    (i = c.data),
                                    r({ type: Le, payload: i }),
                                    n("custom line item Created"),
                                    t.push("/custom_line_item"),
                                    r({ type: De }),
                                    (a.next = 16);
                                  break;
                                case 12:
                                  (a.prev = 12),
                                    (a.t0 = a.catch(0)),
                                    401 ===
                                      (null === a.t0 ||
                                      void 0 === a.t0 ||
                                      null === (o = a.t0.response) ||
                                      void 0 === o ||
                                      null === (s = o.data) ||
                                      void 0 === s
                                        ? void 0
                                        : s.code) &&
                                      (localStorage.removeItem("profile"),
                                      window.location.reload()),
                                    n(
                                      null === a.t0 ||
                                        void 0 === a.t0 ||
                                        null === (l = a.t0.response) ||
                                        void 0 === l ||
                                        null === (d = l.data) ||
                                        void 0 === d
                                        ? void 0
                                        : d.message
                                    );
                                case 16:
                                case "end":
                                  return a.stop();
                              }
                          },
                          a,
                          null,
                          [[0, 12]]
                        );
                      })
                    );
                    return function (e) {
                      return a.apply(this, arguments);
                    };
                  })();
                })(e, v, y)
              );
            },
          });
        return Object(xt.jsxs)(na.a, {
          theme: Va,
          children: [
            Object(xt.jsx)(Qn.a, {}),
            Object(xt.jsx)(Xn.a, {
              component: "main",
              maxWidth: "sm",
              sx: { mb: 4 },
              children: Object(xt.jsxs)(Zn.a, {
                variant: "outlined",
                sx: { my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } },
                children: [
                  Object(xt.jsxs)(ea.a, {
                    component: "h1",
                    variant: "h4",
                    align: "center",
                    children: [
                      null !== O && void 0 !== O && O.state ? "Update" : "Add",
                      " Custom Line item",
                    ],
                  }),
                  Object(xt.jsx)(r.a.Fragment, {
                    children: Object(xt.jsx)("form", {
                      onSubmit: k.handleSubmit,
                      children: Object(xt.jsxs)(r.a.Fragment, {
                        children: [
                          Object(xt.jsx)(r.a.Fragment, {
                            children: Object(xt.jsxs)(Jn.a, {
                              container: !0,
                              spacing: 3,
                              style: { marginTop: "25px" },
                              children: [
                                Object(xt.jsx)(Jn.a, {
                                  item: !0,
                                  xs: 12,
                                  sm: 12,
                                  marginTop: "60px",
                                  children: Object(xt.jsx)(aa.a, {
                                    id: "name",
                                    name: "name",
                                    label: "Custom name",
                                    fullWidth: !0,
                                    value: k.values.name,
                                    onChange: k.handleChange,
                                    error:
                                      k.touched.name && Boolean(k.errors.name),
                                    helperText: k.touched.name && k.errors.name,
                                    variant: "standard",
                                  }),
                                }),
                                Object(xt.jsx)(Jn.a, {
                                  item: !0,
                                  xs: 12,
                                  md: 12,
                                  children: Object(xt.jsx)(
                                    ca.a,
                                    Object(j.a)(
                                      Object(j.a)({}, _),
                                      {},
                                      {
                                        id: "lineItemId",
                                        name: "lineItemId",
                                        defaultValue:
                                          null !== O &&
                                          void 0 !== O &&
                                          null !== (u = O.state) &&
                                          void 0 !== u &&
                                          u.lineItemId
                                            ? null === O ||
                                              void 0 === O ||
                                              null === (b = O.state) ||
                                              void 0 === b
                                              ? void 0
                                              : b.lineItemId
                                            : null,
                                        onChange: function (e, t) {
                                          return k.setFieldValue(
                                            "lineItemId",
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.id
                                          );
                                        },
                                        onBlur: function () {
                                          return k.setTouched(
                                            Object(j.a)(
                                              Object(j.a)({}, k.touched),
                                              {},
                                              { lineItemId: !0 }
                                            )
                                          );
                                        },
                                        renderInput: function (e) {
                                          return Object(xt.jsx)(
                                            aa.a,
                                            Object(j.a)(
                                              Object(j.a)({}, e),
                                              {},
                                              {
                                                error:
                                                  k.touched.lineItemId &&
                                                  Boolean(k.errors.lineItemId),
                                                helperText:
                                                  k.touched.lineItemId &&
                                                  k.errors.lineItemId,
                                                name: "lineItemId",
                                                label: "Select Line Item",
                                                variant: "standard",
                                              }
                                            )
                                          );
                                        },
                                      }
                                    )
                                  ),
                                }),
                                Object(xt.jsx)(Jn.a, {
                                  item: !0,
                                  xs: 12,
                                  md: 12,
                                  children: Object(xt.jsx)(
                                    ca.a,
                                    Object(j.a)(
                                      Object(j.a)({}, S),
                                      {},
                                      {
                                        id: "vendorUserId",
                                        name: "vendorUserId",
                                        defaultValue:
                                          null !== O &&
                                          void 0 !== O &&
                                          null !== (m = O.state) &&
                                          void 0 !== m &&
                                          m.vendorUserId
                                            ? null === O ||
                                              void 0 === O ||
                                              null === (x = O.state) ||
                                              void 0 === x
                                              ? void 0
                                              : x.vendorUserId
                                            : null,
                                        onChange: function (e, t) {
                                          return k.setFieldValue(
                                            "vendorUserId",
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.id
                                          );
                                        },
                                        onBlur: function () {
                                          return k.setTouched(
                                            Object(j.a)(
                                              Object(j.a)({}, k.touched),
                                              {},
                                              { vendorUserId: !0 }
                                            )
                                          );
                                        },
                                        renderInput: function (e) {
                                          return Object(xt.jsx)(
                                            aa.a,
                                            Object(j.a)(
                                              Object(j.a)({}, e),
                                              {},
                                              {
                                                error:
                                                  k.touched.vendorUserId &&
                                                  Boolean(
                                                    k.errors.vendorUserId
                                                  ),
                                                helperText:
                                                  k.touched.vendorUserId &&
                                                  k.errors.vendorUserId,
                                                name: "vendorUserId",
                                                label: "Select Vendor user",
                                                variant: "standard",
                                              }
                                            )
                                          );
                                        },
                                      }
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                          Object(xt.jsx)(Kn.a, {
                            sx: { display: "flex", justifyContent: "flex-end" },
                            style: { marginTop: "25px" },
                            children: Object(xt.jsx)(on.a, {
                              type: "submit",
                              variant: "contained",
                              sx: { mt: 3, ml: 1 },
                              children: w
                                ? Object(xt.jsx)(St.a, {
                                    color: "info",
                                    size: 25,
                                    thickness: 4,
                                    sx: { mt: 3, ml: 1 },
                                  })
                                : null !== O && void 0 !== O && O.state
                                ? "Update"
                                : "Create",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Ua = n(681),
        Ma = n(676),
        za = n(685),
        qa = n(682),
        Ha = n(684),
        $a = n(680),
        Ga = n(686),
        Ja = n(683),
        Qa = n(679),
        Ka = n(318),
        Xa = n.n(Ka),
        Za = n(317),
        er = n.n(Za),
        tr = function () {
          return (function () {
            var e = Object(J.a)(
              K.a.mark(function e(t) {
                var n, a, r, c;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: Ne }),
                            (e.next = 4),
                            ne.get("/v1/reports/vendorBasedDuePaid")
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: Ke, payload: a }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            401 ===
                              (null === e.t0 ||
                              void 0 === e.t0 ||
                              null === (r = e.t0.response) ||
                              void 0 === r ||
                              null === (c = r.data) ||
                              void 0 === c
                                ? void 0
                                : c.code) &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(
                              null === e.t0 || void 0 === e.t0
                                ? void 0
                                : e.t0.response
                            );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        nr = function () {
          return (function () {
            var e = Object(J.a)(
              K.a.mark(function e(t) {
                var n, a, r, c;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: Ne }),
                            (e.next = 4),
                            ne.get("/v1/reports/dcIdsBasedDuePaid")
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: Xe, payload: a }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            401 ===
                              (null === e.t0 ||
                              void 0 === e.t0 ||
                              null === (r = e.t0.response) ||
                              void 0 === r ||
                              null === (c = r.data) ||
                              void 0 === c
                                ? void 0
                                : c.code) &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(
                              null === e.t0 || void 0 === e.t0
                                ? void 0
                                : e.t0.response
                            );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        };
      function ar(e) {
        var t,
          n = e.row,
          c = Object(a.useState)(!1),
          i = Object(o.a)(c, 2),
          s = i[0],
          l = i[1];
        return Object(xt.jsxs)(r.a.Fragment, {
          children: [
            Object(xt.jsxs)(Qa.a, {
              sx: { "& > *": { borderBottom: "unset" } },
              onClick: function () {
                return l(!s);
              },
              children: [
                Object(xt.jsx)($a.a, {
                  width: 50,
                  children: Object(xt.jsx)(Ma.a, {
                    "aria-label": "expand row",
                    size: "small",
                    onClick: function () {
                      return l(!s);
                    },
                    children: s
                      ? Object(xt.jsx)(er.a, {})
                      : Object(xt.jsx)(Xa.a, {}),
                  }),
                }),
                Object(xt.jsx)($a.a, {
                  scope: "row",
                  width: 300,
                  style: { fontSize: 16 },
                  children:
                    null === n ||
                    void 0 === n ||
                    null === (t = n.vendor) ||
                    void 0 === t
                      ? void 0
                      : t.name.toUpperCase(),
                }),
                Object(xt.jsx)($a.a, {
                  align: "right",
                  width: 100,
                  style: { color: "#1AA260" },
                  children: Object(xt.jsxs)("b", {
                    children: [
                      "$",
                      null === n || void 0 === n
                        ? void 0
                        : n.totalPaid.toFixed(2),
                    ],
                  }),
                }),
                Object(xt.jsx)($a.a, {
                  align: "right",
                  width: 100,
                  style: { color: "#db3236" },
                  children: Object(xt.jsxs)("b", {
                    children: [
                      "$",
                      null === n || void 0 === n
                        ? void 0
                        : n.totalUnPaid.toFixed(2),
                    ],
                  }),
                }),
              ],
            }),
            Object(xt.jsx)(Qa.a, {
              children: Object(xt.jsx)($a.a, {
                style: { paddingBottom: 0, paddingTop: 0 },
                colSpan: 4,
                children: Object(xt.jsx)(Ua.a, {
                  in: s,
                  timeout: "auto",
                  unmountOnExit: !0,
                  children: Object(xt.jsxs)(Kn.a, {
                    sx: { margin: 1 },
                    children: [
                      Object(xt.jsx)(ea.a, {
                        variant: "h6",
                        gutterBottom: !0,
                        component: "div",
                        children: "Vendor Contacts",
                      }),
                      Object(xt.jsxs)(qa.a, {
                        size: "small",
                        "aria-label": "purchases",
                        children: [
                          Object(xt.jsx)(Ja.a, {
                            children: Object(xt.jsxs)(Qa.a, {
                              children: [
                                Object(xt.jsx)($a.a, {
                                  children: "Vendor User Name",
                                }),
                                Object(xt.jsx)($a.a, { children: "Email" }),
                                Object(xt.jsx)($a.a, {
                                  align: "right",
                                  children: "Paid",
                                }),
                                Object(xt.jsx)($a.a, {
                                  align: "right",
                                  children: "UnPaid",
                                }),
                              ],
                            }),
                          }),
                          Object(xt.jsx)(Ha.a, {
                            children: n.details.map(function (e) {
                              return Object(xt.jsxs)(
                                Qa.a,
                                {
                                  children: [
                                    Object(xt.jsxs)($a.a, {
                                      scope: "row",
                                      children: [
                                        e.vendorContact.firstName,
                                        " ",
                                        e.vendorContact.lastName,
                                      ],
                                    }),
                                    Object(xt.jsx)($a.a, {
                                      scope: "row",
                                      children: e.vendorContact.email,
                                    }),
                                    Object(xt.jsxs)($a.a, {
                                      align: "right",
                                      style: { color: "#1AA260" },
                                      children: ["$", e.paid.toFixed(2)],
                                    }),
                                    Object(xt.jsxs)($a.a, {
                                      align: "right",
                                      style: { color: "#db3236" },
                                      children: ["$", e.unPaid.toFixed(2)],
                                    }),
                                  ],
                                },
                                e.date
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function rr() {
        var e = Object(p.b)(),
          t = Object(p.c)(function (e) {
            var t;
            return null === e ||
              void 0 === e ||
              null === (t = e.reports) ||
              void 0 === t
              ? void 0
              : t.vendordueReport;
          }),
          n = {
            options: Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.reports) ||
                void 0 === t
                ? void 0
                : t.allVendors;
            }).filter(function (e) {
              return 1 === e.active;
            }),
            getOptionLabel: function (e) {
              return null === e || void 0 === e ? void 0 : e.vname;
            },
          },
          r = Object(p.c)(function (e) {
            var t;
            return null === e ||
              void 0 === e ||
              null === (t = e.reports) ||
              void 0 === t
              ? void 0
              : t.isLoading;
          });
        return (
          Object(a.useEffect)(
            function () {
              e(tr()),
                e(
                  (function () {
                    var e = Object(J.a)(
                      K.a.mark(function e(t) {
                        var n, a, r, c;
                        return K.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    ne.get("/v1/vendor/all")
                                  );
                                case 3:
                                  (n = e.sent),
                                    (a = n.data),
                                    t({ type: nt, payload: a }),
                                    (e.next = 12);
                                  break;
                                case 8:
                                  (e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    401 ===
                                      (null === e.t0 ||
                                      void 0 === e.t0 ||
                                      null === (r = e.t0.response) ||
                                      void 0 === r ||
                                      null === (c = r.data) ||
                                      void 0 === c
                                        ? void 0
                                        : c.code) &&
                                      (localStorage.removeItem("profile"),
                                      window.location.reload()),
                                    console.log(
                                      null === e.t0 || void 0 === e.t0
                                        ? void 0
                                        : e.t0.response
                                    );
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
            },
            [e]
          ),
          Object(xt.jsxs)(Xn.a, {
            style: { marginTop: "75px" },
            children: [
              Object(xt.jsxs)(Jn.a, {
                container: !0,
                justifyContent: "space-between",
                style: { padding: "2%", backgroundColor: "#fff" },
                children: [
                  Object(xt.jsx)(Jn.a, {
                    children: Object(xt.jsx)("h1", {
                      children: "Vendor Based Due/Paid Report",
                    }),
                  }),
                  Object(xt.jsx)(Jn.a, {
                    children: Object(xt.jsx)(
                      m.a,
                      Object(j.a)(
                        Object(j.a)(
                          {
                            style: { width: "200px" },
                            renderInput: function (e) {
                              return Object(xt.jsx)(
                                aa.a,
                                Object(j.a)(
                                  Object(j.a)({}, e),
                                  {},
                                  {
                                    label: "Filter by Vendor",
                                    variant: "outlined",
                                  }
                                )
                              );
                            },
                          },
                          n
                        ),
                        {},
                        {
                          onChange: function (t, n) {
                            var a;
                            n
                              ? e(
                                  ((a =
                                    null === n || void 0 === n ? void 0 : n.id),
                                  (function () {
                                    var e = Object(J.a)(
                                      K.a.mark(function e(t) {
                                        var n, r, c, i;
                                        return K.a.wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.prev = 0),
                                                    t({ type: Ne }),
                                                    (e.next = 4),
                                                    we(a)
                                                  );
                                                case 4:
                                                  (n = e.sent),
                                                    (r = n.data),
                                                    t({ type: Ke, payload: r }),
                                                    (e.next = 13);
                                                  break;
                                                case 9:
                                                  (e.prev = 9),
                                                    (e.t0 = e.catch(0)),
                                                    401 ===
                                                      (null === e.t0 ||
                                                      void 0 === e.t0 ||
                                                      null ===
                                                        (c = e.t0.response) ||
                                                      void 0 === c ||
                                                      null === (i = c.data) ||
                                                      void 0 === i
                                                        ? void 0
                                                        : i.code) &&
                                                      (localStorage.removeItem(
                                                        "profile"
                                                      ),
                                                      window.location.reload()),
                                                    console.log(
                                                      null === e.t0 ||
                                                        void 0 === e.t0
                                                        ? void 0
                                                        : e.t0.response
                                                    );
                                                case 13:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e,
                                          null,
                                          [[0, 9]]
                                        );
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })())
                                )
                              : e(tr());
                          },
                        }
                      )
                    ),
                  }),
                ],
              }),
              Object(xt.jsx)(za.a, {}),
              Object(xt.jsx)(Ga.a, {
                component: Zn.a,
                children: Object(xt.jsxs)(qa.a, {
                  "aria-label": "collapsible table",
                  children: [
                    Object(xt.jsx)(Ja.a, {
                      children: Object(xt.jsxs)(Qa.a, {
                        children: [
                          Object(xt.jsx)($a.a, { width: 50 }),
                          Object(xt.jsx)($a.a, {
                            width: 300,
                            children: "Vendor Name",
                          }),
                          Object(xt.jsx)($a.a, {
                            width: 100,
                            align: "right",
                            children: "Total Paid",
                          }),
                          Object(xt.jsx)($a.a, {
                            width: 100,
                            align: "right",
                            children: "Total Unpaid",
                          }),
                        ],
                      }),
                    }),
                    Object(xt.jsx)(Ha.a, {
                      children: r
                        ? Object(xt.jsx)(Qa.a, {
                            sx: { "& > *": { borderBottom: "unset" } },
                            children: Object(xt.jsx)($a.a, {
                              scope: "row",
                              width: 300,
                              style: { fontSize: 16 },
                              colSpan: 4,
                              align: "center",
                              children: Object(xt.jsx)(St.a, {
                                size: 25,
                                thickness: 4,
                                sx: { mt: 3, ml: 1 },
                              }),
                            }),
                          })
                        : t.length > 0
                        ? null === t || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              var t;
                              return Object(xt.jsx)(
                                ar,
                                { row: e },
                                null === e ||
                                  void 0 === e ||
                                  null === (t = e.vendor) ||
                                  void 0 === t
                                  ? void 0
                                  : t.name
                              );
                            })
                        : Object(xt.jsx)(Qa.a, {
                            children: Object(xt.jsx)($a.a, {
                              colSpan: 4,
                              align: "center",
                              children: "No Data Found",
                            }),
                          }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var cr = function () {
          var e = Object(p.b)(),
            t = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.reports) ||
                void 0 === t
                ? void 0
                : t.DcidReport;
            }),
            n = {
              options: Object(p.c)(function (e) {
                return e.invoices.DCid;
              }),
              getOptionLabel: function (e) {
                return null === e || void 0 === e ? void 0 : e.dc_name;
              },
            },
            r = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.reports) ||
                void 0 === t
                ? void 0
                : t.isLoading;
            });
          return (
            Object(a.useEffect)(
              function () {
                e(nr()), e(it());
              },
              [e]
            ),
            Object(xt.jsx)(xt.Fragment, {
              children: Object(xt.jsxs)(Ct.a, {
                style: { marginTop: "75px" },
                children: [
                  Object(xt.jsxs)(g.a, {
                    container: !0,
                    justifyContent: "space-between",
                    style: { padding: "2%", backgroundColor: "#fff" },
                    children: [
                      Object(xt.jsx)(g.a, {
                        children: Object(xt.jsx)("h1", {
                          children: " DC-Id Based Due/Paid Report",
                        }),
                      }),
                      Object(xt.jsx)(g.a, {
                        children: Object(xt.jsx)(
                          m.a,
                          Object(j.a)(
                            Object(j.a)(
                              {
                                style: { width: "200px" },
                                label: "select DC-Id",
                                renderInput: function (e) {
                                  return Object(xt.jsx)(
                                    w.a,
                                    Object(j.a)(
                                      Object(j.a)({}, e),
                                      {},
                                      {
                                        label: "Filter by DC Id",
                                        variant: "outlined",
                                      }
                                    )
                                  );
                                },
                              },
                              n
                            ),
                            {},
                            {
                              onChange: function (t, n) {
                                var a;
                                n
                                  ? e(
                                      ((a =
                                        null === n || void 0 === n
                                          ? void 0
                                          : n.id),
                                      (function () {
                                        var e = Object(J.a)(
                                          K.a.mark(function e(t) {
                                            var n, r, c, i;
                                            return K.a.wrap(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.prev = 0),
                                                        t({ type: Ne }),
                                                        (e.next = 4),
                                                        Ce(a)
                                                      );
                                                    case 4:
                                                      (n = e.sent),
                                                        (r = n.data),
                                                        t({
                                                          type: Xe,
                                                          payload: r,
                                                        }),
                                                        (e.next = 13);
                                                      break;
                                                    case 9:
                                                      (e.prev = 9),
                                                        (e.t0 = e.catch(0)),
                                                        401 ===
                                                          (null === e.t0 ||
                                                          void 0 === e.t0 ||
                                                          null ===
                                                            (c =
                                                              e.t0.response) ||
                                                          void 0 === c ||
                                                          null ===
                                                            (i = c.data) ||
                                                          void 0 === i
                                                            ? void 0
                                                            : i.code) &&
                                                          (localStorage.removeItem(
                                                            "profile"
                                                          ),
                                                          window.location.reload()),
                                                        console.log(e.t0);
                                                    case 13:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e,
                                              null,
                                              [[0, 9]]
                                            );
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })())
                                    )
                                  : e(nr());
                              },
                            }
                          )
                        ),
                      }),
                    ],
                  }),
                  Object(xt.jsx)(y.a, {}),
                  Object(xt.jsx)(C.a, {
                    children: Object(xt.jsxs)(_.a, {
                      "aria-label": "collapsible table",
                      children: [
                        Object(xt.jsx)(S.a, {
                          children: Object(xt.jsxs)(k.a, {
                            children: [
                              Object(xt.jsx)(N.a, {
                                width: 300,
                                children: "Vendor Name",
                              }),
                              Object(xt.jsx)(N.a, {
                                align: "right",
                                width: 100,
                                children: "Total Paid",
                              }),
                              Object(xt.jsx)(N.a, {
                                align: "right",
                                width: 100,
                                children: "Total Unpaid",
                              }),
                            ],
                          }),
                        }),
                        Object(xt.jsx)(D.a, {
                          children:
                            t.length || r
                              ? r
                                ? Object(xt.jsx)(k.a, {
                                    sx: { "& > *": { borderBottom: "unset" } },
                                    children: Object(xt.jsx)(N.a, {
                                      scope: "row",
                                      width: 300,
                                      style: { fontSize: 16 },
                                      colSpan: 4,
                                      align: "center",
                                      children: Object(xt.jsx)(St.a, {
                                        size: 25,
                                        thickness: 4,
                                        sx: { mt: 3, ml: 1 },
                                      }),
                                    }),
                                  })
                                : null === t || void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    var t;
                                    return Object(xt.jsxs)(k.a, {
                                      children: [
                                        Object(xt.jsx)(N.a, {
                                          scope: "row",
                                          style: { fontSize: 16 },
                                          width: 300,
                                          children:
                                            null === e ||
                                            void 0 === e ||
                                            null === (t = e.dcId) ||
                                            void 0 === t
                                              ? void 0
                                              : t.dcName.toUpperCase(),
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          align: "right",
                                          style: { color: "#1AA260" },
                                          width: 100,
                                          children: Object(xt.jsxs)("b", {
                                            children: [
                                              "$",
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.paid.toFixed(2),
                                            ],
                                          }),
                                        }),
                                        Object(xt.jsx)(N.a, {
                                          align: "right",
                                          style: { color: "#db3236" },
                                          width: 100,
                                          children: Object(xt.jsxs)("b", {
                                            children: [
                                              "$",
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.unPaid.toFixed(2),
                                            ],
                                          }),
                                        }),
                                      ],
                                    });
                                  })
                              : Object(xt.jsx)(k.a, {
                                  children: Object(xt.jsx)(N.a, {
                                    colSpan: 4,
                                    align: "center",
                                    children: "No Data Found",
                                  }),
                                }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        ir = n(663),
        or = n(687),
        sr = n(658);
      function lr(e) {
        var t = e.formik;
        return Object(xt.jsxs)(a.Fragment, {
          children: [
            Object(xt.jsx)(ea.a, {
              variant: "h6",
              gutterBottom: !0,
              children: "Vendor Create",
            }),
            Object(xt.jsx)(Jn.a, {
              container: !0,
              spacing: 3,
              children: Object(xt.jsx)(Jn.a, {
                item: !0,
                xs: 12,
                children: Object(xt.jsx)(aa.a, {
                  id: "vendorName",
                  name: "vendorName",
                  label: "Enter Vendor Name",
                  fullWidth: !0,
                  autoComplete: "vendorName",
                  variant: "standard",
                  onBlur: function () {
                    return t.setTouched(
                      Object(j.a)(
                        Object(j.a)({}, t.touched),
                        {},
                        { vendorName: !0 }
                      )
                    );
                  },
                  value: t.values.vendorName,
                  onChange: t.handleChange,
                  error: t.touched.vendorName && Boolean(t.errors.vendorName),
                  helperText: t.touched.vendorName && t.errors.vendorName,
                }),
              }),
            }),
          ],
        });
      }
      function dr(e) {
        var t = e.formik,
          n =
            (e.reviewVal,
            {
              options: ur,
              getOptionLabel: function (e) {
                return e.title;
              },
            });
        return Object(xt.jsxs)(a.Fragment, {
          children: [
            Object(xt.jsx)(ea.a, {
              variant: "h6",
              gutterBottom: !0,
              children: "Vendor User",
            }),
            Object(xt.jsxs)(Jn.a, {
              container: !0,
              spacing: 3,
              children: [
                Object(xt.jsx)(Jn.a, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: Object(xt.jsx)(
                    ca.a,
                    Object(j.a)(
                      Object(j.a)({}, n),
                      {},
                      {
                        id: "primaryContact",
                        onChange: function (e, n) {
                          return t.setFieldValue(
                            "primaryContact",
                            null === n || void 0 === n ? void 0 : n.val
                          );
                        },
                        defaultValue: ur.find(function (e) {
                          return e.val === t.values.primaryContact
                            ? e.title
                            : null;
                        }),
                        onBlur: function () {
                          return t.setTouched(
                            Object(j.a)(
                              Object(j.a)({}, t.touched),
                              {},
                              { primaryContact: !0 }
                            )
                          );
                        },
                        renderInput: function (e) {
                          return Object(xt.jsx)(
                            aa.a,
                            Object(j.a)(
                              Object(j.a)({}, e),
                              {},
                              {
                                error:
                                  t.touched.primaryContact &&
                                  Boolean(t.errors.primaryContact),
                                helperText:
                                  t.touched.primaryContact &&
                                  t.errors.primaryContact,
                                name: "primaryContact",
                                label: "Select primary user",
                                variant: "standard",
                              }
                            )
                          );
                        },
                      }
                    )
                  ),
                }),
                Object(xt.jsx)(Jn.a, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: Object(xt.jsx)(
                    ca.a,
                    Object(j.a)(
                      Object(j.a)({}, n),
                      {},
                      {
                        id: "secondaryContact",
                        onChange: function (e, n) {
                          return t.setFieldValue(
                            "secondaryContact",
                            null === n || void 0 === n ? void 0 : n.val
                          );
                        },
                        defaultValue: ur.find(function (e) {
                          return e.val === t.values.secondaryContact
                            ? e.title
                            : null;
                        }),
                        onBlur: function () {
                          return t.setTouched(
                            Object(j.a)(
                              Object(j.a)({}, t.touched),
                              {},
                              { secondaryContact: !0 }
                            )
                          );
                        },
                        renderInput: function (e) {
                          return Object(xt.jsx)(
                            aa.a,
                            Object(j.a)(
                              Object(j.a)({}, e),
                              {},
                              {
                                error:
                                  t.touched.secondaryContact &&
                                  Boolean(t.errors.secondaryContact),
                                helperText:
                                  t.touched.secondaryContact &&
                                  t.errors.secondaryContact,
                                name: "secondaryContact",
                                label: "Select secondary user",
                                variant: "standard",
                              }
                            )
                          );
                        },
                      }
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      var ur = [{ title: "An Vendor User", val: "1" }];
      function jr(e, t) {
        for (var n = 0; n < t.length; n++) if (t[n].val === e) return t[n];
      }
      function br(e) {
        var t = e.reviewVal,
          n = jr(t.primaryContact, ur),
          r = jr(t.secondaryContact, ur);
        return Object(xt.jsx)(a.Fragment, {
          children: Object(xt.jsxs)(Jn.a, {
            container: !0,
            spacing: 2,
            children: [
              Object(xt.jsxs)(Jn.a, {
                item: !0,
                xs: 12,
                sm: 12,
                children: [
                  Object(xt.jsx)(ea.a, {
                    variant: "h6",
                    gutterBottom: !0,
                    sx: { mt: 2 },
                    children: "Vendor",
                  }),
                  Object(xt.jsx)(Jn.a, {
                    container: !0,
                    children: Object(xt.jsxs)(a.Fragment, {
                      children: [
                        Object(xt.jsx)(Jn.a, {
                          item: !0,
                          xs: 6,
                          children: Object(xt.jsx)(ea.a, {
                            gutterBottom: !0,
                            children: "Vendor Name",
                          }),
                        }),
                        Object(xt.jsx)(Jn.a, {
                          item: !0,
                          xs: 6,
                          children: Object(xt.jsx)(ea.a, {
                            gutterBottom: !0,
                            children: t.vname,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(xt.jsxs)(Jn.a, {
                item: !0,
                container: !0,
                direction: "column",
                xs: 12,
                sm: 12,
                children: [
                  Object(xt.jsx)(ea.a, {
                    variant: "h6",
                    gutterBottom: !0,
                    sx: { mt: 2 },
                    children: "Vendor Contact details",
                  }),
                  Object(xt.jsxs)(Jn.a, {
                    container: !0,
                    children: [
                      Object(xt.jsxs)(a.Fragment, {
                        children: [
                          Object(xt.jsx)(Jn.a, {
                            item: !0,
                            xs: 6,
                            children: Object(xt.jsx)(ea.a, {
                              gutterBottom: !0,
                              children: "Primary contact",
                            }),
                          }),
                          Object(xt.jsx)(Jn.a, {
                            item: !0,
                            xs: 6,
                            children: Object(xt.jsx)(ea.a, {
                              gutterBottom: !0,
                              children: n.title,
                            }),
                          }),
                        ],
                      }),
                      Object(xt.jsxs)(a.Fragment, {
                        children: [
                          Object(xt.jsx)(Jn.a, {
                            item: !0,
                            xs: 6,
                            children: Object(xt.jsx)(ea.a, {
                              gutterBottom: !0,
                              children: "Secondary contact",
                            }),
                          }),
                          Object(xt.jsx)(Jn.a, {
                            item: !0,
                            xs: 6,
                            children: Object(xt.jsx)(ea.a, {
                              gutterBottom: !0,
                              children: t.secondaryContact
                                ? r.title
                                : "not specified",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var pr = Object(ia.a)("div")(function (e) {
          var t = e.theme;
          return Object(j.a)(
            Object(j.a)({}, t.typography.button),
            {},
            {
              backgroundColor: t.palette.background.paper,
              padding: t.spacing(1),
            }
          );
        }),
        hr = ["Create Vendor", "Select Vendor User", "Review"];
      function mr(e, t, n) {
        switch (e) {
          case 0:
            return Object(xt.jsx)(lr, { formik: t });
          case 1:
            return Object(xt.jsx)(dr, { formik: t, reviewVal: n });
          case 2:
            return Object(xt.jsx)(br, { reviewVal: n });
          default:
            throw new Error("Unknown step");
        }
      }
      var xr = Object(ta.a)();
      function vr() {
        var e = Object(a.useState)(0),
          t = Object(o.a)(e, 2),
          n = t[0],
          c = t[1],
          i = Object(d.b)(),
          s = Object(o.a)(i, 1)[0],
          l = Object(p.b)(),
          u = Object(p.c)(function (e) {
            return e.vendors.vendorCreatedData;
          }),
          b = Object(p.c)(function (e) {
            return e.vendors.isLoading;
          });
        Object(a.useEffect)(
          function () {
            l({ type: "END_LOADING" });
          },
          [l]
        );
        var m = function () {
            c(n + 1);
          },
          x = Object(h.d)({
            initialValues: { vendorName: "" },
            validationSchema: Or,
            onSubmit: function (e, t) {
              var n = t.resetForm;
              l(
                (function (e, t, n) {
                  return (function () {
                    var a = Object(J.a)(
                      K.a.mark(function a(r) {
                        var c, i, o, s;
                        return K.a.wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    r({ type: Ne }),
                                    (a.next = 4),
                                    ie(e)
                                  );
                                case 4:
                                  (c = a.sent),
                                    (i = c.data),
                                    t(
                                      "Vendor created, now assign primary/secondary contact"
                                    ),
                                    n(),
                                    r({ type: et, payload: i }),
                                    (a.next = 16);
                                  break;
                                case 11:
                                  (a.prev = 11),
                                    (a.t0 = a.catch(0)),
                                    401 === a.t0.response.data.code &&
                                      (localStorage.removeItem("profile"),
                                      window.location.reload()),
                                    t(
                                      null === a.t0 ||
                                        void 0 === a.t0 ||
                                        null === (o = a.t0.response) ||
                                        void 0 === o ||
                                        null === (s = o.data) ||
                                        void 0 === s
                                        ? void 0
                                        : s.message
                                    ),
                                    console.log(a.t0);
                                case 16:
                                  return (
                                    (a.prev = 16), r({ type: De }), a.finish(16)
                                  );
                                case 19:
                                case "end":
                                  return a.stop();
                              }
                          },
                          a,
                          null,
                          [[0, 11, 16, 19]]
                        );
                      })
                    );
                    return function (e) {
                      return a.apply(this, arguments);
                    };
                  })();
                })(e, s, function () {
                  m(), n();
                })
              );
            },
          }),
          v = Object(h.d)({
            initialValues: { primaryContact: null, secondaryContact: null },
            validationSchema: fr,
            onSubmit: function (e) {
              l({
                type: "SET_VENDOR_USER",
                payload: Object(j.a)(
                  Object(j.a)({}, u),
                  {},
                  {
                    primaryContact: e.primaryContact,
                    secondaryContact: e.secondaryContact,
                  }
                ),
              }),
                m();
            },
          }),
          O = function (e) {
            l(
              (function (e, t, n) {
                return (function () {
                  var a = Object(J.a)(
                    K.a.mark(function a(r) {
                      var c, i;
                      return K.a.wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (a.prev = 0),
                                  r({ type: Ne }),
                                  (a.next = 4),
                                  (o = e),
                                  ne.patch("/v1/vendor", o)
                                );
                              case 4:
                                t("Vendor updated successfully."),
                                  n(),
                                  (a.next = 13);
                                break;
                              case 8:
                                (a.prev = 8),
                                  (a.t0 = a.catch(0)),
                                  401 === a.t0.response.data.code &&
                                    (localStorage.removeItem("profile"),
                                    window.location.reload()),
                                  t(
                                    null === a.t0 ||
                                      void 0 === a.t0 ||
                                      null === (c = a.t0.response) ||
                                      void 0 === c ||
                                      null === (i = c.data) ||
                                      void 0 === i
                                      ? void 0
                                      : i.message
                                  ),
                                  console.log(a.t0);
                              case 13:
                                return (
                                  (a.prev = 13), r({ type: De }), a.finish(13)
                                );
                              case 16:
                              case "end":
                                return a.stop();
                            }
                          var o;
                        },
                        a,
                        null,
                        [[0, 8, 13, 16]]
                      );
                    })
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })();
              })(
                {
                  id: u.id,
                  primaryContact: u.primaryContact,
                  secondaryContact: u.secondaryContact,
                },
                s,
                function () {
                  x.resetForm(), v.resetForm(), m();
                }
              )
            );
          };
        return Object(xt.jsxs)(na.a, {
          theme: xr,
          children: [
            Object(xt.jsx)(Qn.a, {}),
            Object(xt.jsx)(Xn.a, {
              component: "main",
              maxWidth: "sm",
              sx: { mb: 4 },
              children: Object(xt.jsxs)(Zn.a, {
                variant: "outlined",
                sx: { my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } },
                children: [
                  Object(xt.jsx)(ea.a, {
                    component: "h1",
                    variant: "h4",
                    align: "center",
                    children: "Create Vendor",
                  }),
                  n !== hr.length &&
                    Object(xt.jsx)(ir.a, {
                      activeStep: n,
                      sx: { pt: 3, pb: 5 },
                      children: hr.map(function (e) {
                        return Object(xt.jsx)(
                          or.a,
                          { children: Object(xt.jsx)(sr.a, { children: e }) },
                          e
                        );
                      }),
                    }),
                  Object(xt.jsx)(r.a.Fragment, {
                    children:
                      n === hr.length
                        ? Object(xt.jsx)(r.a.Fragment, {
                            children: Object(xt.jsx)(Jn.a, {
                              container: !0,
                              spacing: 3,
                              children: Object(xt.jsxs)(Jn.a, {
                                item: !0,
                                xs: 12,
                                md: 12,
                                children: [
                                  Object(xt.jsx)(ea.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    align: "center",
                                    children: Object(xt.jsx)(pr, {
                                      children: "New Vendor is Created",
                                    }),
                                  }),
                                  Object(xt.jsx)(Kn.a, {
                                    textAlign: "center",
                                    children: Object(xt.jsx)(on.a, {
                                      align: "center",
                                      variant: "contained",
                                      onClick: function () {
                                        return c(0);
                                      },
                                      sx: { mt: 3, ml: 1 },
                                      children: "Create Another Vendor",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          })
                        : Object(xt.jsx)(r.a.Fragment, {
                            children: Object(xt.jsxs)("form", {
                              onSubmit:
                                0 === n
                                  ? x.handleSubmit
                                  : 1 === n
                                  ? v.handleSubmit
                                  : function (e) {
                                      return e.preventDefault();
                                    },
                              children: [
                                mr(n, 0 === n ? x : v, u),
                                Object(xt.jsxs)(Kn.a, {
                                  sx: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  },
                                  style: { marginTop: "20px" },
                                  children: [
                                    2 === n &&
                                      Object(xt.jsx)(on.a, {
                                        onClick: function () {
                                          c(n - 1);
                                        },
                                        sx: { mt: 3, ml: 1 },
                                        disabled: b,
                                        children: "Back",
                                      }),
                                    Object(xt.jsx)(on.a, {
                                      disabled:
                                        0 === n
                                          ? !(x.isValid && x.dirty)
                                          : !(v.isValid && v.dirty),
                                      onClick:
                                        n === hr.length - 1
                                          ? function () {
                                              return O(u.active);
                                            }
                                          : function (e) {
                                              e.stopPropagation(),
                                                e.nativeEvent.stopImmediatePropagation();
                                            },
                                      variant: "contained",
                                      type: "submit",
                                      sx: { mt: 3, ml: 1 },
                                      children: b
                                        ? Object(xt.jsx)(St.a, {
                                            color: "info",
                                            size: 25,
                                            thickness: 4,
                                            sx: { mt: 3, ml: 1 },
                                          })
                                        : n === hr.length - 1
                                        ? "Update"
                                        : "Next",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Or = W.d({ vendorName: W.e().required("Vendor name is required") }),
        fr = W.d({
          primaryContact: W.e()
            .required("Primary contact is required")
            .nullable(),
          secondaryContact: W.e().nullable(),
        }),
        gr = n(162),
        yr = n(692),
        wr = n(649),
        Cr = n(650),
        Ir = n(323),
        _r = n(662),
        Sr = n(661),
        kr = function (e, t, n, a) {
          return (function () {
            var r = Object(J.a)(
              K.a.mark(function r(c) {
                var i;
                return K.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.prev = 0), (r.next = 3), Ie(e);
                        case 3:
                          (i = r.sent),
                            i.data,
                            n("Withdraw"),
                            t.push("/dashboard"),
                            (r.next = 12);
                          break;
                        case 9:
                          (r.prev = 9),
                            (r.t0 = r.catch(0)),
                            401 === r.t0.response.data.code
                              ? (localStorage.removeItem("profile"),
                                window.location.reload())
                              : n(r.t0.response.data.message);
                        case 12:
                          return (r.prev = 12), a(!1), r.finish(12);
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9, 12, 15]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        Nr = function (e, t) {
          return (function () {
            var n = Object(J.a)(
              K.a.mark(function n(a) {
                var r, c, i, o;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: Ne }),
                            (n.next = 4),
                            _e(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: Ze, payload: c }),
                            a({ type: De }),
                            (n.next = 14);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            401 ===
                              (null === n.t0 ||
                              void 0 === n.t0 ||
                              null === (i = n.t0.response) ||
                              void 0 === i ||
                              null === (o = i.data) ||
                              void 0 === o
                                ? void 0
                                : o.code) &&
                              (localStorage.removeItem("profile"),
                              window.location.reload()),
                            console.log(n.t0.response);
                        case 14:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        Dr = n(657),
        Tr = n(666),
        Pr = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 960,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        };
      function Ar() {
        var e,
          t,
          n,
          r,
          c,
          i,
          s,
          u,
          b,
          h,
          x,
          v,
          O,
          C,
          I,
          _,
          S,
          k,
          N,
          D,
          T,
          A,
          B,
          F,
          L = Object(a.useState)([]),
          E = Object(o.a)(L, 2),
          R = E[0],
          V = E[1],
          W = Object(a.useState)(null),
          Y = Object(o.a)(W, 2),
          U = Y[0],
          M = Y[1],
          z = Object(a.useState)(0),
          q = Object(o.a)(z, 2),
          H = q[0],
          $ = q[1],
          G = Object(a.useState)(10),
          Q = Object(o.a)(G, 2),
          X = Q[0],
          Z = Q[1],
          ee = Object(a.useState)([]),
          te = Object(o.a)(ee, 2),
          ne = te[0],
          ae = te[1],
          re = Object(a.useState)([]),
          ce = Object(o.a)(re, 2),
          ie = ce[0],
          oe = ce[1],
          se = Object(a.useState)(!1),
          le = Object(o.a)(se, 2),
          de = le[0],
          ue = le[1],
          je = Object(a.useState)({}),
          be = Object(o.a)(je, 2),
          pe = be[0],
          he = be[1],
          me = Object(d.b)(),
          xe = Object(o.a)(me, 1)[0],
          ve = Object(l.g)(),
          Oe = Object(p.b)(),
          fe = Object(p.c)(function (e) {
            var t;
            return null === e ||
              void 0 === e ||
              null === (t = e.withdraw) ||
              void 0 === t
              ? void 0
              : t.withdraws;
          }),
          ge = Object(p.c)(function (e) {
            return null === e || void 0 === e ? void 0 : e.invoices.isLoading;
          }),
          ye = Object(p.c)(function (e) {
            var t;
            return null === e ||
              void 0 === e ||
              null === (t = e.withdraw) ||
              void 0 === t
              ? void 0
              : t.isWithdrawUpdateLoading;
          });
        Object(a.useEffect)(
          function () {
            Oe(
              U
                ? (function (e, t, n) {
                    return (function () {
                      var a = Object(J.a)(
                        K.a.mark(function a(r) {
                          var c, i, o, s;
                          return K.a.wrap(
                            function (a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    return (
                                      (a.prev = 0),
                                      r({ type: Ne }),
                                      (a.next = 4),
                                      Se(e, t, n)
                                    );
                                  case 4:
                                    (c = a.sent),
                                      (i = c.data),
                                      r({ type: Ze, payload: i }),
                                      r({ type: De }),
                                      (a.next = 14);
                                    break;
                                  case 10:
                                    (a.prev = 10),
                                      (a.t0 = a.catch(0)),
                                      401 ===
                                        (null === a.t0 ||
                                        void 0 === a.t0 ||
                                        null === (o = a.t0.response) ||
                                        void 0 === o ||
                                        null === (s = o.data) ||
                                        void 0 === s
                                          ? void 0
                                          : s.code) &&
                                        (localStorage.removeItem("profile"),
                                        window.location.reload()),
                                      console.log(a.t0.response);
                                  case 14:
                                  case "end":
                                    return a.stop();
                                }
                            },
                            a,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (e) {
                        return a.apply(this, arguments);
                      };
                    })();
                  })(U, X, H + 1)
                : Nr(X, H + 1)
            );
          },
          [H, X, Oe, U]
        );
        var we = {
          options: [
            { title: "Cancelled", id: "cancelled" },
            { title: "Processing", id: "processing" },
            { title: "Paid", id: "paid" },
          ],
          getOptionLabel: function (e) {
            return e.title;
          },
        };
        Object(a.useEffect)(
          function () {
            var e = R.map(function (e) {
              return { _id: e };
            });
            ae(e);
          },
          [R]
        );
        return Object(xt.jsxs)(Ct.a, {
          children: [
            Object(xt.jsxs)(g.a, {
              container: !0,
              justifyContent: "space-between",
              style: { padding: "2%", backgroundColor: "#fff" },
              children: [
                Object(xt.jsx)(g.a, {}),
                Object(xt.jsx)(g.a, {
                  children: Object(xt.jsx)("h1", { children: "Withdraw List" }),
                }),
                Object(xt.jsx)(g.a, {}),
              ],
            }),
            Object(xt.jsx)(y.a, {}),
            Object(xt.jsxs)(g.a, {
              container: !0,
              style: { padding: "2%", backgroundColor: "#fff" },
              children: [
                Object(xt.jsx)(g.a, {
                  md: 2,
                  children: Object(xt.jsx)(
                    m.a,
                    Object(j.a)(
                      Object(j.a)(
                        {
                          style: { width: "200px" },
                          label: "select DC-Id",
                          renderInput: function (e) {
                            return Object(xt.jsx)(
                              w.a,
                              Object(j.a)(
                                Object(j.a)({}, e),
                                {},
                                { label: "Filter status", variant: "outlined" }
                              )
                            );
                          },
                        },
                        we
                      ),
                      {},
                      {
                        onChange: function (e, t) {
                          M(t ? t.id : null);
                        },
                      }
                    )
                  ),
                }),
                Object(xt.jsx)(g.a, { md: 7 }),
                R.length > 0 &&
                  Object(xt.jsxs)(xt.Fragment, {
                    children: [
                      Object(xt.jsx)(g.a, {
                        children: Object(xt.jsx)(
                          m.a,
                          Object(j.a)(
                            Object(j.a)(
                              {
                                style: { width: "200px" },
                                label: "select DC-Id",
                                renderInput: function (e) {
                                  return Object(xt.jsx)(
                                    w.a,
                                    Object(j.a)(
                                      Object(j.a)({}, e),
                                      {},
                                      {
                                        label: "Select status",
                                        variant: "outlined",
                                      }
                                    )
                                  );
                                },
                              },
                              we
                            ),
                            {},
                            {
                              onChange: function (e, t) {
                                oe(null === t || void 0 === t ? void 0 : t.id);
                              },
                            }
                          )
                        ),
                      }),
                      Object(xt.jsx)(P.a, {
                        disabled: ye,
                        onClick: function () {
                          R.length > 0
                            ? Oe(
                                (function (e, t, n, a, r) {
                                  return (function () {
                                    var c = Object(J.a)(
                                      K.a.mark(function c(i) {
                                        var o, s;
                                        return K.a.wrap(
                                          function (c) {
                                            for (;;)
                                              switch ((c.prev = c.next)) {
                                                case 0:
                                                  return (
                                                    (c.prev = 0),
                                                    i({ type: at }),
                                                    (c.next = 4),
                                                    ke(e)
                                                  );
                                                case 4:
                                                  c.sent.data,
                                                    t(
                                                      "Withdraw successfully updated"
                                                    ),
                                                    i(a),
                                                    r([]),
                                                    i({ type: rt }),
                                                    n.push("/withdraw"),
                                                    (c.next = 17);
                                                  break;
                                                case 13:
                                                  (c.prev = 13),
                                                    (c.t0 = c.catch(0)),
                                                    401 ===
                                                      (null === c.t0 ||
                                                      void 0 === c.t0 ||
                                                      null ===
                                                        (o = c.t0.response) ||
                                                      void 0 === o ||
                                                      null === (s = o.data) ||
                                                      void 0 === s
                                                        ? void 0
                                                        : s.code) &&
                                                      (localStorage.removeItem(
                                                        "profile"
                                                      ),
                                                      window.location.reload()),
                                                    t(
                                                      c.t0.response.data.message
                                                    );
                                                case 17:
                                                case "end":
                                                  return c.stop();
                                              }
                                          },
                                          c,
                                          null,
                                          [[0, 13]]
                                        );
                                      })
                                    );
                                    return function (e) {
                                      return c.apply(this, arguments);
                                    };
                                  })();
                                })(
                                  { withdrawList: ne, status: ie },
                                  xe,
                                  ve,
                                  Nr(X, H + 1),
                                  V
                                )
                              )
                            : xe("Please Check Minimum one Box");
                        },
                        children: ye
                          ? Object(xt.jsx)(St.a, {
                              color: "info",
                              size: 25,
                              thickness: 4,
                              sx: { mt: 3, ml: 1 },
                            })
                          : "Update",
                      }),
                    ],
                  }),
              ],
            }),
            Object(xt.jsx)(y.a, {}),
            Object(xt.jsx)(Kn.a, {
              sx: { width: "100%" },
              children: Object(xt.jsxs)(Zn.a, {
                sx: { width: "100%", mb: 2 },
                children: [
                  Object(xt.jsx)(Ga.a, {
                    children: Object(xt.jsxs)(qa.a, {
                      sx: { minWidth: 750 },
                      "aria-labelledby": "tableTitle",
                      children: [
                        Object(xt.jsx)(Ja.a, {
                          children: Object(xt.jsxs)(Qa.a, {
                            children: [
                              Object(xt.jsx)($a.a, { padding: "checkbox" }),
                              Object(xt.jsx)($a.a, { children: "Transfer ID" }),
                              Object(xt.jsx)($a.a, { children: "Vendor Name" }),
                              Object(xt.jsx)($a.a, {
                                children: "Vendor Email",
                              }),
                              Object(xt.jsx)($a.a, {
                                align: "center",
                                children: "Amount",
                              }),
                              Object(xt.jsx)($a.a, {
                                align: "center",
                                children: "Date",
                              }),
                              Object(xt.jsx)($a.a, {
                                align: "center",
                                width: 60,
                                children: "Status",
                              }),
                              Object(xt.jsx)($a.a, {
                                align: "center",
                                width: 50,
                                children: "View",
                              }),
                            ],
                          }),
                        }),
                        Object(xt.jsx)(Ha.a, {
                          children:
                            (fe &&
                              (null === fe || void 0 === fe
                                ? void 0
                                : fe.resultData.length) > 0) ||
                            ge
                              ? ge
                                ? Object(xt.jsx)(Qa.a, {
                                    children: Object(xt.jsx)($a.a, {
                                      scope: "row",
                                      width: 300,
                                      style: { fontSize: 16 },
                                      colSpan: 8,
                                      align: "center",
                                      children: Object(xt.jsx)(St.a, {
                                        size: 25,
                                        thickness: 4,
                                        sx: { mt: 3, ml: 1 },
                                      }),
                                    }),
                                  })
                                : null === fe ||
                                  void 0 === fe ||
                                  null === (e = fe.resultData) ||
                                  void 0 === e
                                ? void 0
                                : e.map(function (e, t) {
                                    var n,
                                      a,
                                      r,
                                      c,
                                      i =
                                        ((c =
                                          null === e || void 0 === e
                                            ? void 0
                                            : e._id),
                                        -1 !== R.indexOf(c)),
                                      o = "enhanced-table-checkbox-".concat(t);
                                    return Object(xt.jsxs)(
                                      Qa.a,
                                      {
                                        hover: !0,
                                        role: "checkbox",
                                        "aria-checked": i,
                                        tabIndex: -1,
                                        selected: i,
                                        children: [
                                          Object(xt.jsx)($a.a, {
                                            onClick: function (t) {
                                              R.length < 10
                                                ? "paid" ===
                                                    (null === e || void 0 === e
                                                      ? void 0
                                                      : e.status) ||
                                                  "cancelled" ===
                                                    (null === e || void 0 === e
                                                      ? void 0
                                                      : e.status)
                                                  ? t.preventDefault()
                                                  : (function (e, t) {
                                                      var n = R.indexOf(t),
                                                        a = [];
                                                      -1 === n
                                                        ? (a = a.concat(R, t))
                                                        : 0 === n
                                                        ? (a = a.concat(
                                                            R.slice(1)
                                                          ))
                                                        : n === R.length - 1
                                                        ? (a = a.concat(
                                                            R.slice(0, -1)
                                                          ))
                                                        : n > 0 &&
                                                          (a = a.concat(
                                                            R.slice(0, n),
                                                            R.slice(n + 1)
                                                          )),
                                                        V(a);
                                                    })(
                                                      0,
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e._id
                                                    )
                                                : xe(
                                                    "Only 10 box can be checked"
                                                  );
                                            },
                                            children: Object(xt.jsx)(Dr.a, {
                                              disabled:
                                                "paid" ===
                                                  (null === e || void 0 === e
                                                    ? void 0
                                                    : e.status) ||
                                                "cancelled" ===
                                                  (null === e || void 0 === e
                                                    ? void 0
                                                    : e.status),
                                              color: "primary",
                                              checked: i,
                                              inputProps: {
                                                "aria-labelledby": o,
                                              },
                                            }),
                                          }),
                                          Object(xt.jsxs)($a.a, {
                                            id: o,
                                            scope: "row",
                                            children: [
                                              " ",
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.transferId,
                                              " ",
                                            ],
                                          }),
                                          Object(xt.jsxs)($a.a, {
                                            children: [
                                              null === e ||
                                              void 0 === e ||
                                              null === (n = e.vendorInfo) ||
                                              void 0 === n
                                                ? void 0
                                                : n.firstName,
                                              " ",
                                              null === e ||
                                              void 0 === e ||
                                              null === (a = e.vendorInfo) ||
                                              void 0 === a
                                                ? void 0
                                                : a.lastName,
                                            ],
                                          }),
                                          Object(xt.jsx)($a.a, {
                                            children:
                                              null === e ||
                                              void 0 === e ||
                                              null === (r = e.vendorInfo) ||
                                              void 0 === r
                                                ? void 0
                                                : r.email,
                                          }),
                                          Object(xt.jsx)($a.a, {
                                            align: "right",
                                            style: { color: "green" },
                                            children: Object(xt.jsxs)("b", {
                                              children: [
                                                "$",
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.amount.toFixed(2),
                                              ],
                                            }),
                                          }),
                                          Object(xt.jsx)($a.a, {
                                            align: "center",
                                            children: ut()(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.date
                                            ).format("MM-DD-YYYY"),
                                          }),
                                          Object(xt.jsx)($a.a, {
                                            align: "center",
                                            children: Object(xt.jsx)(Aa.a, {
                                              label: Object(xt.jsx)("b", {
                                                children:
                                                  e.status.toUpperCase(),
                                              }),
                                              color: "primary",
                                              style: {
                                                backgroundColor:
                                                  "paid" === e.status
                                                    ? "#8bc34a"
                                                    : "processing" === e.status
                                                    ? "#4885ed"
                                                    : "#db3236",
                                              },
                                            }),
                                          }),
                                          Object(xt.jsx)($a.a, {
                                            align: "center",
                                            children: Object(xt.jsx)(f.a, {
                                              title: "View Invoice",
                                              onClick: function () {
                                                return (
                                                  (t = e), ue(!0), void he(t)
                                                );
                                                var t;
                                              },
                                              style: {
                                                color: "#6279edc2",
                                                cursor: "pointer",
                                              },
                                              children: Object(xt.jsx)(Tt.a, {
                                                style: {
                                                  width: "20px",
                                                  height: "20px",
                                                },
                                              }),
                                            }),
                                          }),
                                        ],
                                      },
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.name
                                    );
                                  })
                              : Object(xt.jsx)(Qa.a, {
                                  children: Object(xt.jsx)($a.a, {
                                    colSpan: 8,
                                    align: "center",
                                    children: "No Data Found",
                                  }),
                                }),
                        }),
                      ],
                    }),
                  }),
                  Object(xt.jsx)(_t.a, {
                    rowsPerPageOptions: [2, 10, 25, 100],
                    component: "div",
                    count: fe && fe.totalResults ? fe.totalResults : 0,
                    rowsPerPage: X || 0,
                    page: H || 0,
                    onPageChange: function (e, t) {
                      $(t);
                    },
                    onRowsPerPageChange: function (e) {
                      Z(+e.target.value), $(0);
                    },
                  }),
                  Object(xt.jsx)(Tr.a, {
                    open: de,
                    onClose: function () {
                      ue(!1), he({});
                    },
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: Object(xt.jsxs)(Kn.a, {
                      sx: Pr,
                      children: [
                        Object(xt.jsxs)(ea.a, {
                          variant: "h5",
                          component: "h2",
                          children: [
                            "Transfer Id : ",
                            null === pe || void 0 === pe
                              ? void 0
                              : pe.transferId,
                          ],
                        }),
                        Object(xt.jsxs)(ea.a, {
                          variant: "h5",
                          component: "h2",
                          children: [
                            "Account Type : ",
                            "paypal" in pe ? "PAYPAL" : "ACH",
                          ],
                        }),
                        Object(xt.jsx)(ea.a, {
                          id: "modal-modal-description",
                          sx: { mt: 2 },
                          style: { marginTop: "25px" },
                          children:
                            "paypal" in pe
                              ? Object(xt.jsx)(Ga.a, {
                                  component: Zn.a,
                                  children: Object(xt.jsx)(qa.a, {
                                    sx: { minWidth: 650 },
                                    size: "small",
                                    "aria-label": "a dense table",
                                    children: Object(xt.jsx)(Ha.a, {
                                      children: Object(xt.jsxs)(Qa.a, {
                                        sx: {
                                          "&:last-child td, &:last-child th": {
                                            border: 0,
                                          },
                                        },
                                        children: [
                                          Object(xt.jsx)($a.a, {
                                            width: "50%",
                                            component: "th",
                                            scope: "row",
                                            children: "PayPal Email",
                                          }),
                                          Object(xt.jsx)($a.a, {
                                            width: "50%",
                                            component: "th",
                                            scope: "row",
                                            children:
                                              null === pe ||
                                              void 0 === pe ||
                                              null === (F = pe.paypal) ||
                                              void 0 === F
                                                ? void 0
                                                : F.email,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                })
                              : Object(xt.jsx)(xt.Fragment, {
                                  children: Object(xt.jsx)(Ga.a, {
                                    component: Zn.a,
                                    children: Object(xt.jsxs)(qa.a, {
                                      sx: { minWidth: 650 },
                                      size: "small",
                                      "aria-label": "a dense table",
                                      children: [
                                        Object(xt.jsxs)(Ha.a, {
                                          children: [
                                            Object(xt.jsxs)(Qa.a, {
                                              sx: {
                                                "&:last-child td, &:last-child th":
                                                  { border: 0 },
                                              },
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Bank name",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (t = pe.ach) ||
                                                    void 0 === t ||
                                                    null === (n = t.bank) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n.name,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "City",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (r = pe.ach) ||
                                                    void 0 === r ||
                                                    null === (c = r.bank) ||
                                                    void 0 === c
                                                      ? void 0
                                                      : c.city,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "State",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (i = pe.ach) ||
                                                    void 0 === i ||
                                                    null === (s = i.bank) ||
                                                    void 0 === s
                                                      ? void 0
                                                      : s.state,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Zip",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (u = pe.ach) ||
                                                    void 0 === u ||
                                                    null === (b = u.bank) ||
                                                    void 0 === b
                                                      ? void 0
                                                      : b.zip,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(xt.jsxs)(Ha.a, {
                                          children: [
                                            Object(xt.jsxs)(Qa.a, {
                                              sx: {
                                                "&:last-child td, &:last-child th":
                                                  { border: 0 },
                                              },
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Account Number",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (h = pe.ach) ||
                                                    void 0 === h ||
                                                    null === (x = h.account) ||
                                                    void 0 === x
                                                      ? void 0
                                                      : x.accountNumber,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Routing Number",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (v = pe.ach) ||
                                                    void 0 === v ||
                                                    null === (O = v.account) ||
                                                    void 0 === O
                                                      ? void 0
                                                      : O.routingNumber,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "State",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (C = pe.ach) ||
                                                    void 0 === C ||
                                                    null === (I = C.account) ||
                                                    void 0 === I
                                                      ? void 0
                                                      : I.accountType,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(xt.jsxs)(Ha.a, {
                                          children: [
                                            Object(xt.jsxs)(Qa.a, {
                                              sx: {
                                                "&:last-child td, &:last-child th":
                                                  { border: 0 },
                                              },
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "First name",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (_ = pe.ach) ||
                                                    void 0 === _ ||
                                                    null === (S = _.personal) ||
                                                    void 0 === S
                                                      ? void 0
                                                      : S.firstName,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Last name",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (k = pe.ach) ||
                                                    void 0 === k ||
                                                    null === (N = k.personal) ||
                                                    void 0 === N
                                                      ? void 0
                                                      : N.lastName,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Email",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (D = pe.ach) ||
                                                    void 0 === D ||
                                                    null === (T = D.personal) ||
                                                    void 0 === T
                                                      ? void 0
                                                      : T.email,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(Qa.a, {
                                              children: [
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children: "Mobile",
                                                }),
                                                Object(xt.jsx)($a.a, {
                                                  component: "th",
                                                  scope: "row",
                                                  children:
                                                    null === pe ||
                                                    void 0 === pe ||
                                                    null === (A = pe.ach) ||
                                                    void 0 === A ||
                                                    null === (B = A.personal) ||
                                                    void 0 === B
                                                      ? void 0
                                                      : B.mobile,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Br = gr.a.div.withConfig({
          displayName: "Withdraw__Wrapper",
          componentId: "sc-5psh66-0",
        })(_r.b),
        Fr = Object(gr.a)(O.a).withConfig({
          displayName: "Withdraw__Typography",
          componentId: "sc-5psh66-1",
        })(_r.b),
        Lr = Object(gr.a)(la.a).withConfig({
          displayName: "Withdraw__Input",
          componentId: "sc-5psh66-2",
        })(_r.b),
        Er = Object(gr.a)(y.a).withConfig({
          displayName: "Withdraw__Divider",
          componentId: "sc-5psh66-3",
        })(_r.b),
        Rr = function (e) {
          var t = Object(d.b)(),
            n = Object(o.a)(t, 1)[0],
            r = Object(p.b)(),
            c = Object(a.useState)(null),
            i = Object(o.a)(c, 2),
            u = i[0],
            b = i[1];
          Object(a.useEffect)(function () {
            b(JSON.parse(localStorage.getItem("profile")).user.role);
          }, []),
            Object(a.useEffect)(
              function () {
                r(ga());
              },
              [r]
            );
          var m = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t
                ? void 0
                : t.wallet;
            }),
            x = Object(p.c)(function (e) {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.walletPayment) ||
                void 0 === t
                ? void 0
                : t.isLoading;
            }),
            v = e.width,
            O = e.fetchError,
            f = Object(l.g)(),
            y = W.d().shape({
              total_amount: W.c()
                .required("Amont is required")
                .min(1, "Minimum Amount is $1"),
            }),
            C = Object(a.useState)(null),
            I = Object(o.a)(C, 2),
            _ = I[0],
            S = I[1],
            k = function (e) {
              S(e.currentTarget);
            },
            N = function () {
              S(null);
            };
          return O
            ? Object(xt.jsx)(Sr.a, {
                severity: "error",
                children: O.message || "Something went wrong",
              })
            : Object(xt.jsx)(xt.Fragment, {
                children:
                  "vendor" === u
                    ? Object(xt.jsxs)(Br, {
                        p: Object(yr.a)("md", v) ? 20 : 0,
                        style: { margin: "50px 250px" },
                        children: [
                          Object(xt.jsx)(g.a, {
                            justifyContent: "space-between",
                            container: !0,
                            spacing: 6,
                            children: Object(xt.jsx)(g.a, { item: !0 }),
                          }),
                          Object(xt.jsx)("div", { style: { height: "1rem" } }),
                          x
                            ? Object(xt.jsx)("p", { children: "Loading..." })
                            : Object(xt.jsxs)(wr.a, {
                                style: { margin: "50px 250px" },
                                children: [
                                  Object(xt.jsx)(Fr, {
                                    style: {
                                      fontSize: 21,
                                      paddingLeft: "50px",
                                    },
                                    variant: "h4",
                                    gutterBottom: !0,
                                    children: "Withdraw",
                                  }),
                                  Object(xt.jsx)(Cr.a, {
                                    children: Object(xt.jsx)(h.c, {
                                      initialValues: {
                                        total_amount: "",
                                        type: "paypal",
                                        email: "",
                                        account_ref_id: "",
                                        account: null,
                                      },
                                      validationSchema: y,
                                      onSubmit: function (e, t) {
                                        var a = t.setErrors,
                                          c = t.setStatus,
                                          i = t.setSubmitting;
                                        try {
                                          i(!0);
                                          var o = {
                                            amount: e.total_amount,
                                            accountId: e.account_ref_id,
                                          };
                                          r(kr(o, f, n, i));
                                        } catch (l) {
                                          var s =
                                            l.message || "Something went wrong";
                                          i(!1),
                                            c({ success: !1 }),
                                            a({ submit: s });
                                        }
                                      },
                                      children: function (e) {
                                        var t,
                                          n = e.errors,
                                          a = e.handleBlur,
                                          r = e.handleChange,
                                          c = e.handleSubmit,
                                          i = e.isSubmitting,
                                          o = e.touched,
                                          l = e.values,
                                          d = e.setValues;
                                        return Object(xt.jsxs)("form", {
                                          noValidate: !0,
                                          onSubmit: c,
                                          style: {
                                            margin: "0 ".concat(
                                              Object(yr.a)("md", v) ? "5rem" : 0
                                            ),
                                          },
                                          children: [
                                            n.submit &&
                                              Object(xt.jsx)(Sr.a, {
                                                mt: 2,
                                                mb: 1,
                                                severity: "warning",
                                                children: n.submit,
                                              }),
                                            Object(xt.jsxs)("div", {
                                              style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                              },
                                              children: [
                                                Object(xt.jsx)(Fr, {
                                                  children: "Amount",
                                                }),
                                                Object(xt.jsx)(Fr, {
                                                  style: { color: "red" },
                                                  children: n.total_amount,
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsx)(Lr, {
                                              type: "number",
                                              name: "total_amount",
                                              style: {
                                                border: "1px solid black",
                                                borderRadius: "4px",
                                                padding: 6,
                                              },
                                              placeholder:
                                                "Available Balance: $".concat(
                                                  (null === m || void 0 === m
                                                    ? void 0
                                                    : m.availableBalance
                                                  ).toFixed(2)
                                                ),
                                              value: l.total_amount,
                                              error: Boolean(
                                                o.total_amount && n.total_amount
                                              ),
                                              fullWidth: !0,
                                              onBlur: a,
                                              onChange: r,
                                              my: 3,
                                            }),
                                            Object(xt.jsx)(Fr, {
                                              children: "Type",
                                            }),
                                            Object(xt.jsxs)(w.a, {
                                              fullWidth: !0,
                                              className: "px-2 my-2",
                                              variant: "outlined",
                                              name: "type",
                                              id: "type",
                                              select: !0,
                                              value: l.type,
                                              onChange: r,
                                              error: o.type && Boolean(n.type),
                                              children: [
                                                Object(xt.jsx)(yn.a, {
                                                  value: "ach",
                                                  children: "Ach",
                                                }),
                                                Object(xt.jsx)(yn.a, {
                                                  value: "paypal",
                                                  children: "PayPal",
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsxs)(g.a, {
                                              container: !0,
                                              style: { marginTop: "0.7rem" },
                                              children: [
                                                Object(xt.jsx)(g.a, {
                                                  item: !0,
                                                  xs: 6,
                                                  children: Object(xt.jsxs)(
                                                    "div",
                                                    {
                                                      style: {
                                                        minWidth: "9rem",
                                                        display: "inline-block",
                                                      },
                                                      children: [
                                                        Object(xt.jsx)(wr.a, {
                                                          my: 4,
                                                          p: 2,
                                                          mx: 2,
                                                          style: {
                                                            cursor: "pointer",
                                                          },
                                                          children: Object(
                                                            xt.jsx
                                                          )(P.a, {
                                                            variant: "outlined",
                                                            onClick: k,
                                                            children: Object(
                                                              xt.jsx
                                                            )(Fr, {
                                                              variant: "h6",
                                                              children:
                                                                "paypal" ===
                                                                l.type
                                                                  ? l.email ||
                                                                    "Choose Account"
                                                                  : l.account ||
                                                                    "Choose Account",
                                                            }),
                                                          }),
                                                        }),
                                                        Object(xt.jsx)(Ir.a, {
                                                          style: {
                                                            marginTop: "2.5%",
                                                          },
                                                          anchorEl: _,
                                                          open: Boolean(_),
                                                          onClose: N,
                                                          children:
                                                            m &&
                                                            (null ===
                                                              (t =
                                                                m[
                                                                  "paypal" ===
                                                                  l.type
                                                                    ? "paypalData"
                                                                    : "achData"
                                                                ]) ||
                                                            void 0 === t
                                                              ? void 0
                                                              : t.map(function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return Object(
                                                                    xt.jsx
                                                                  )(
                                                                    yn.a,
                                                                    {
                                                                      style: {
                                                                        backgroundColor:
                                                                          "#f2f2f2",
                                                                        minWidth: 170,
                                                                      },
                                                                      onClick:
                                                                        function () {
                                                                          "paypal" ===
                                                                          l.type
                                                                            ? d(
                                                                                Object(
                                                                                  j.a
                                                                                )(
                                                                                  Object(
                                                                                    j.a
                                                                                  )(
                                                                                    {},
                                                                                    l
                                                                                  ),
                                                                                  {},
                                                                                  {
                                                                                    account_ref_id:
                                                                                      e._id,
                                                                                    email:
                                                                                      e.email,
                                                                                  }
                                                                                )
                                                                              )
                                                                            : "ach" ===
                                                                                l.type &&
                                                                              d(
                                                                                Object(
                                                                                  j.a
                                                                                )(
                                                                                  Object(
                                                                                    j.a
                                                                                  )(
                                                                                    {},
                                                                                    l
                                                                                  ),
                                                                                  {},
                                                                                  {
                                                                                    account_ref_id:
                                                                                      e._id,
                                                                                    account:
                                                                                      e
                                                                                        .account
                                                                                        .accountNumber,
                                                                                  }
                                                                                )
                                                                              ),
                                                                            N();
                                                                        },
                                                                      children:
                                                                        Object(
                                                                          xt.jsx
                                                                        )(Fr, {
                                                                          children:
                                                                            e.email ||
                                                                            e
                                                                              .account
                                                                              .accountNumber,
                                                                        }),
                                                                    },
                                                                    t
                                                                  );
                                                                })),
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(xt.jsx)(g.a, {
                                                  item: !0,
                                                  xs: 6,
                                                  justify: "flex-end",
                                                  children: Object(xt.jsx)(
                                                    s.b,
                                                    {
                                                      style: {
                                                        textDecoration: "none",
                                                        display: "inline",
                                                        float: "right",
                                                      },
                                                      to: "/accounts",
                                                      children: Object(xt.jsx)(
                                                        Fr,
                                                        {
                                                          color: "primary",
                                                          variant: "h6",
                                                          style: {
                                                            display: "inline",
                                                          },
                                                          children:
                                                            "Add New Account",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            Object(xt.jsx)(Er, {
                                              mb: 6,
                                              mt: 4,
                                            }),
                                            Object(xt.jsx)("div", {
                                              style: { textAlign: "center" },
                                              children: Object(xt.jsx)(P.a, {
                                                type: "submit",
                                                variant: "contained",
                                                color: "primary",
                                                size: "large",
                                                disabled: i,
                                                children: "Withdraw",
                                              }),
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                        ],
                      })
                    : Object(xt.jsx)(Ar, {}),
              });
        },
        Vr = function () {
          var e = Object(a.useState)(!0),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1];
          return (
            Object(a.useEffect)(function () {
              var e = window.location.pathname;
              ("/payment-verification" === e || "/payment-failed" === e) &&
                r(!1);
            }, []),
            Object(xt.jsx)(p.a, {
              store: Gn,
              children: Object(xt.jsx)(s.a, {
                children: Object(xt.jsxs)(d.a, {
                  children: [
                    null !== ee && n
                      ? Object(xt.jsxs)(xt.Fragment, {
                          children: [
                            Object(xt.jsx)(nn, {}),
                            Object(xt.jsx)(_n, {}),
                          ],
                        })
                      : Object(xt.jsx)(xt.Fragment, {}),
                    Object(xt.jsxs)(l.d, {
                      children: [
                        Object(xt.jsx)(Ln, {
                          path: "/",
                          restricted: !1,
                          component: pn,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/invoices",
                          restricted: !0,
                          component: Lt,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/add/invoice",
                          restricted: !0,
                          component: yt,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/accounts",
                          restricted: !0,
                          component: ya,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/custom_line_item",
                          restricted: !0,
                          component: Ra,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/edit/invoice/:id",
                          restricted: !0,
                          component: yt,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/view/invoice/:id",
                          restricted: !0,
                          component: yt,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/deleted-invoices",
                          restricted: !0,
                          component: An,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/notifications",
                          restricted: !0,
                          component: Bn,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/forgot",
                          restricted: !0,
                          component: Tn,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/reset",
                          restricted: !0,
                          component: Pn,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/create-user",
                          restricted: !0,
                          component: ma,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/dashboard",
                          restricted: !0,
                          component: _a,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/add-wallet-payment",
                          restricted: !0,
                          component: Da,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/payment-verification",
                          restricted: !0,
                          component: Ta,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/add-custom-lineitem",
                          restricted: !0,
                          component: Ya,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/edit-custom-lineitem/:id",
                          restricted: !0,
                          component: Ya,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/payment-failed",
                          restricted: !0,
                          component: Pa,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/transaction-history",
                          restricted: !0,
                          component: Ea,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/Vendordue-paid-report",
                          restricted: !0,
                          component: rr,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/Dcid-paid-report",
                          restricted: !0,
                          component: cr,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/create-vendor",
                          restricted: !0,
                          component: vr,
                          exact: !0,
                        }),
                        Object(xt.jsx)(Ln, {
                          path: "/withdraw",
                          restricted: !0,
                          component: Rr,
                          exact: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Wr = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 696))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  c = t.getLCP,
                  i = t.getTTFB;
                n(e), a(e), r(e), c(e), i(e);
              });
        };
      i.a.render(
        Object(xt.jsx)(r.a.StrictMode, { children: Object(xt.jsx)(Vr, {}) }),
        document.getElementById("root")
      ),
        Wr();
    },
  },
  [[514, 1, 2]],
]);
//# sourceMappingURL=main.657f437d.chunk.js.map
