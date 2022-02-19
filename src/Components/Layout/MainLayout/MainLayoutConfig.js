import {
  UserOutlined,
  RedditOutlined,
  DownloadOutlined,
  FileOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  CalculatorOutlined,DollarCircleOutlined,FundOutlined
} from "@ant-design/icons";

export const Pages = () => {
  return [
    {
      key: "/general_accounting",
      to: "/general_accounting",
      name: "General Accounting",
      icon: <CalculatorOutlined style={{ fontSize: 20 }} />,
      children: [
        {
          key: "/general_accounting/journal_voucher",
          to: "/general_accounting/journal_voucher",
          name: "Journal Voucher",
          icon: <FileAddOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/general_accounting/journal_voucher_posting",
          to: "/general_accounting/journal_voucher_posting",
          name: "Journal Voucher",
          icon: <FileDoneOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/general_accounting/reports",
          to: "/general_accounting/reports",
          name: "Reports",
          icon: <FileExcelOutlined style={{ fontSize: 20 }} />,
        },
      ],
    },
    {
      key: "/payable",
      to: "/payable",
      name: "Payable",
      icon: <DollarCircleOutlined style={{ fontSize: 20 }} />,
      children: [
        {
          key: "/payable/voucher_payable",
          to: "/payable/voucher_payable",
          name: "Voucher Payable",
          icon: <FileAddOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/payable/voucher_payable_posting",
          to: "/payable/voucher_payable_posting",
          name: "Voucher Payable",
          icon: <FileDoneOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/payable/debit_memo",
          to: "/payable/debit_memo",
          name: "Debit Memo",
          icon: <FileAddOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/payable/debit_memo_posting",
          to: "/payable/debit_memo_posting",
          name: "Debit Memo",
          icon: <FileDoneOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/payable/disbursement_voucher",
          to: "/payable/disbursement_voucher",
          name: "Disbursement Voucher",
          icon: <FileAddOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/payable/disbursement_voucher_posting",
          to: "/payable/disbursement_voucher_posting",
          name: "Disbursement Voucher",
          icon: <FileDoneOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/payable/reports",
          to: "/payable/reports",
          name: "Reports",
          icon: <FileExcelOutlined style={{ fontSize: 20 }} />,
        },
      ],
    },

    {
      key: "/sales",
      to: "/sales",
      name: "Sales",
      icon: <FundOutlined style={{ fontSize: 20, }} />,
      children: [
        {
          key: "/sales/delivery_receipt",
          to: "/sales/delivery_receipt",
          name: "Delivery Receipt",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/sales/sales_invoice",
          to: "/sales/sales_invoice",
          name: "Sales Invoice",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/sales/billing_invoice",
          to: "/sales/billing_invoice",
          name: "Billing Invoice",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/sales/reports",
          to: "/sales/reports",
          name: "Reports",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
      ],
    },

    {
      key: "/receivable",
      to: "/receivable",
      name: "Receivable",
      icon: <UserOutlined style={{ fontSize: 20 }} />,
      children: [
        {
          key: "/receivable/credit_memo",
          to: "/receivable/credit_memo",
          name: "Credit Memo",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/receivable/official_receipt",
          to: "/receivable/official_receipt",
          name: "Official Receipt",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/receivable/acknowledgement",
          to: "/receivable/acknowledgement",
          name: "Acknowledgement",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/receivable/collection_receipt",
          to: "/receivable/collection_receipt",
          name: "Collection Receipt",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/receivable/reports",
          to: "/receivable/reports",
          name: "Reports",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
      ],
    },

    {
      key: "/master_reference",
      to: "/master_reference",
      name: "Master Reference",
      icon: <UserOutlined style={{ fontSize: 20 }} />,
      children: [
        {
          key: "/master_reference/accounting",
          to: "/master_reference/accounting",
          name: "Accounting",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/master_reference/products",
          to: "/master_reference/products",
          name: "Products",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/master_reference/customers",
          to: "/master_reference/customers",
          name: "Customers",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/master_reference/suppliers",
          to: "/master_reference/suppliers",
          name: "Suppliers",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
        {
          key: "/master_reference/company",
          to: "/master_reference/company",
          name: "Company",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
      ],
    },

    {
      key: "/security",
      to: "/security",
      name: "Security",
      icon: <UserOutlined style={{ fontSize: 20 }} />,
      children: [
        {
          key: "/security/users",
          to: "/security/users",
          name: "Users",
          icon: <UserOutlined style={{ fontSize: 20 }} />,
        },
      ],
    },
  ];
};
