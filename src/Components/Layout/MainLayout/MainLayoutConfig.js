import {
  UserOutlined,
  RedditOutlined,
  DownloadOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const Pages = () => {
  return [
    {
      key: "/general_accounting",
      to: "/general_accounting",
      name: "General Accounting",
      icon: <UserOutlined />,
      children: [
        {
          key: "/general_accounting/journal_voucher",
          to: "/general_accounting/journal_voucher",
          name: "Journal Voucher",
          icon: <UserOutlined />,
        },
        {
          key: "/general_accounting/journal_voucher_posting",
          to: "/general_accounting/journal_voucher_posting",
          name: "Journal Voucher",
          icon: <UserOutlined />,
        },
        {
          key: "/general_accounting/reports",
          to: "/general_accounting/reports",
          name: "Reports",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      key: "/payable",
      to: "/payable",
      name: "Payable",
      icon: <UserOutlined />,
      children: [
        {
          key: "/payable/voucher_payable",
          to: "/payable/voucher_payable",
          name: "Voucher Payable",
          icon: <UserOutlined />,
        },
        {
          key: "/payable/debit_memo",
          to: "/payable/debit_memo",
          name: "Debit Memo",
          icon: <UserOutlined />,
        },
        {
          key: "/payable/disbursement_voucher",
          to: "/payable/disbursement_voucher",
          name: "Disbursement Voucher",
          icon: <UserOutlined />,
        },
        {
          key: "/payable/reports",
          to: "/payable/reports",
          name: "Reports",
          icon: <UserOutlined />,
        },
      ],
    },

    {
      key: "/sales",
      to: "/sales",
      name: "Sales",
      icon: <UserOutlined />,
      children: [
        {
          key: "/sales/delivery_receipt",
          to: "/sales/delivery_receipt",
          name: "Delivery Receipt",
          icon: <UserOutlined />,
        },
        {
          key: "/sales/sales_invoice",
          to: "/sales/sales_invoice",
          name: "Sales Invoice",
          icon: <UserOutlined />,
        },
        {
          key: "/sales/billing_invoice",
          to: "/sales/billing_invoice",
          name: "Billing Invoice",
          icon: <UserOutlined />,
        },
        {
          key: "/sales/reports",
          to: "/sales/reports",
          name: "Reports",
          icon: <UserOutlined />,
        },
      ],
    },

    {
      key: "/receivable",
      to: "/receivable",
      name: "Receivable",
      icon: <UserOutlined />,
      children: [
        {
          key: "/receivable/credit_memo",
          to: "/receivable/credit_memo",
          name: "Credit Memo",
          icon: <UserOutlined />,
        },
        {
          key: "/receivable/official_receipt",
          to: "/receivable/official_receipt",
          name: "Official Receipt",
          icon: <UserOutlined />,
        },
        {
          key: "/receivable/acknowledgement",
          to: "/receivable/acknowledgement",
          name: "Acknowledgement",
          icon: <UserOutlined />,
        },
        {
          key: "/receivable/collection_receipt",
          to: "/receivable/collection_receipt",
          name: "Collection Receipt",
          icon: <UserOutlined />,
        },
        {
          key: "/receivable/reports",
          to: "/receivable/reports",
          name: "Reports",
          icon: <UserOutlined />,
        },
      ],
    },

    {
      key: "/master_reference",
      to: "/master_reference",
      name: "Master Reference",
      icon: <UserOutlined />,
      children: [
        {
          key: "/master_reference/accounting",
          to: "/master_reference/accounting",
          name: "Accounting",
          icon: <UserOutlined />,
        },
        {
          key: "/master_reference/products",
          to: "/master_reference/products",
          name: "Products",
          icon: <UserOutlined />,
        },
        {
          key: "/master_reference/customers",
          to: "/master_reference/customers",
          name: "Customers",
          icon: <UserOutlined />,
        },
        {
          key: "/master_reference/suppliers",
          to: "/master_reference/suppliers",
          name: "Suppliers",
          icon: <UserOutlined />,
        },
        {
          key: "/master_reference/company",
          to: "/master_reference/company",
          name: "Company",
          icon: <UserOutlined />,
        },
      ],
    },

    {
      key: "/security",
      to: "/security",
      name: "Security",
      icon: <UserOutlined />,
      children: [
        {
          key: "/security/users",
          to: "/security/users",
          name: "Users",
          icon: <UserOutlined />,
        },
      ],
    },
  ];
};
