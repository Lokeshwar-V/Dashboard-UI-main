
import { ReactComponent as DashboardIcon } from "./icons/dashboardkey.svg";
import { ReactComponent as ProductIcon } from "./icons/product.svg";
import { ReactComponent as CustomersIcon } from "./icons/customer.svg";
import { ReactComponent as IncomeICon } from "./icons/income.svg";
import { ReactComponent as PromoteIcon } from "./icons/promote.svg";
import { ReactComponent as HelpIcon } from "./icons/help.svg";
import { ReactComponent as DollarIcon } from "./icons/dollar.svg";
import { ReactComponent as BagIcon } from "./icons/bag.svg";
import { ReactComponent as BalanceIcon } from "./icons/balance.svg";

export const SideNavList = [
    { name: 'Dashboard', icon: <DashboardIcon className="brightness-0 invert" /> },
    { name: 'Product', icon: <ProductIcon className="brightness-0 invert" /> },
    { name: 'Customers', icon: <CustomersIcon className="brightness-0 invert" /> },
    { name: 'Income', icon: <IncomeICon className="brightness-0 invert" /> },
    { name: 'Promote', icon: <PromoteIcon className="brightness-0 invert" /> },
    { name: 'Help', icon: <HelpIcon className="brightness-0 invert" /> },
]

export const cardData = [
    {
        title: "Earning",
        body: "$198k",
        description: {
            growth: "37.8%", period: "this month", isProfit: true, icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path d="M10 17L10 5" stroke="#00AC4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16667 9.99999L10 4.16666L15.8333 9.99999" stroke="#00AC4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        icons: <DollarIcon />,
    },
    {
        title: "Orders",
        body: "$2.4k",
        description: {
            growth: "2%", period: "this month", isProfit: false,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path d="M10 3L10 15" stroke="#D0004B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8333 10L10 15.8333L4.16667 10" stroke="#DC8CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        icons: <BalanceIcon />,
    },
    {
        title: "Balance",
        body: "$2.4k",
        description: {
            growth: "2%", period: "this month", isProfit: false,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path d="M10 3L10 15" stroke="#D0004B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8333 10L10 15.8333L4.16667 10" stroke="#D0004B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        icons: <BalanceIcon />,

    },
    {
        title: "Total Sales",
        body: "$89k",
        description: {
            growth: "11%", period: "this week", isProfit: true, icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path d="M10 17L10 5" stroke="#00AC4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16667 9.99999L10 4.16666L15.8333 9.99999" stroke="#00AC4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        icons: <BagIcon />,

    },
]

export const customBarGraphData = [
    {
        name: 'Jan',
        earnings: 700

    },
    {
        name: 'Feb',
        earnings: 500

    },
    {
        name: 'Mar',
        earnings: 1000

    },
    {
        name: 'Apr',
        earnings: 800

    },
    {
        name: 'May',
        earnings: 850

    },
    {
        name: 'Jun',
        earnings: 200

    },
    {
        name: 'Jul',
        earnings: 850

    },
    {
        name: 'Aug',
        earnings: 1000

    }, {
        name: 'Sep',
        earnings: 980

    }, {
        name: 'Oct',
        earnings: 800

    }, {
        name: 'Nov',
        earnings: 750

    }, {
        name: 'Dec',
        earnings: 820

    },
];

export const rowsObject = [
    {
        timeStamp: "Abstract 3D",
       
        status: "32 in stock",
        source: "$45.99",
        select: "20"
    },
    {
        timeStamp: "Sarphens Illustration",
       
        status: "32 in stock",
        source: "$45.99",
        select: "20"
    },
   
    
]


