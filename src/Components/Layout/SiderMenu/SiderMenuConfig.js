import { UserOutlined, RedditOutlined, DownloadOutlined, FileOutlined, TeamOutlined } from "@ant-design/icons";

export const Pages = () => {
    return {
        generalaccounting: [
            {
                key: "/generalaccounting/journalvoucher",
                to: "/generalaccounting/journalvoucher",
                name: "Journal Voucher",
                breadname: "General Accounting / Journal Voucher",
                icon: <UserOutlined />,
            },
            {
                key: "/generalaccounting/reports",
                to: "/generalaccounting/reports",
                name: "Reports",
                breadname: "General Accounting / Reports",
                icon: <TeamOutlined />,
            },
        ],
        payable: [
            {
                key: "/Payable/VoucherPayable",
                to: "/Payable/VoucherPayable",
                name: "Voucher Payable",
                icon: <UserOutlined />,
            },
            {
                key: "/Payable/DebitMemo",
                to: "/Payable/DebitMemo",
                name: "Debit Memo",
                icon: <TeamOutlined />,
            },
            {
                key: "/Payable/DisbursementVoucher",
                to: "/Payable/DisbursementVoucher",
                name: "Disbursement Voucher",
                icon: <TeamOutlined />,
            },
            {
                key: "/Payable/Reports",
                to: "/Payable/Reports",
                name: "Reports",
                icon: <TeamOutlined />,
            },
        ],

        Sales: [
            {
                key: "/Sales/DeliveryReceipt",
                to: "/Sales/DeliveryReceipt",
                name: "Delivery Receipt",
                icon: <UserOutlined />,
            },
            {
                key: "/Sales/SalesInvoice",
                to: "/Sales/SalesInvoice",
                name: "Sales Invoice",
                icon: <TeamOutlined />,
            },
            {
                key: "/Sales/BillingInvoice",
                to: "/Sales/BillingInvoice",
                name: "Billing Invoice",
                icon: <TeamOutlined />,
            },
            {
                key: "/Sales/Reports",
                to: "/Sales/Reports",
                name: "Reports",
                icon: <TeamOutlined />,
            },
        ],

        Receivable: [
            {
                key: "/Receivable/CreditMemo",
                to: "/Receivable/CreditMemo",
                name: "Credit Memo",
                icon: <UserOutlined />,
            },
            {
                key: "/Receivable/OfficialReceipt",
                to: "/Receivable/OfficialReceipt",
                name: "Official Receipt",
                icon: <TeamOutlined />,
            },
            {
                key: "/Receivable/Acknowledgement",
                to: "/Receivable/Acknowledgement",
                name: "Acknowledgement",
                icon: <TeamOutlined />,
            },
            {
                key: "/Receivable/CollectionReceipt",
                to: "/Receivable/CollectionReceipt",
                name: "Collection Receipt",
                icon: <TeamOutlined />,
            },
            {
                key: "/Receivable/Reports",
                to: "/Receivable/Reports",
                name: "Reports",
                icon: <TeamOutlined />,
            },
        ],

        MasterReference: [
            {
                key: "/MasterReference/Accounting",
                to: "/MasterReference/Accounting",
                name: "Accounting",
                icon: <UserOutlined />,
            },
            {
                key: "/MasterReference/Products",
                to: "/MasterReference/Products",
                name: "Products",
                icon: <UserOutlined />,
            },
            {
                key: "/MasterReference/Customers",
                to: "/MasterReference/Customers",
                name: "Customers",
                icon: <UserOutlined />,
            },
            {
                key: "/MasterReference/Suppliers",
                to: "/MasterReference/Suppliers",
                name: "Suppliers",
                icon: <UserOutlined />,
            },
            {
                key: "/MasterReference/Company",
                to: "/MasterReference/Company",
                name: "Company",
                icon: <UserOutlined />,
            },
        ],

        Security: [
            {
                key: "/Security/Users",
                to: "/sSecurity/Users",
                name: "Users",
                icon: <UserOutlined />,
            },
        ],
    };
};
