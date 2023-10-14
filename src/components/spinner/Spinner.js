import './Spinner.scss';

function Spinner()  {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-1.2285012285012284s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(32.72727272727273 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-1.1056511056511056s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(65.45454545454545 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.9828009828009827s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(98.18181818181819 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.8599508599508598s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(130.9090909090909 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.7371007371007371s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(163.63636363636363 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.6142506142506142s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(196.36363636363637 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.49140049140049136s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(229.0909090909091 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.36855036855036855s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(261.8181818181818 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.24570024570024568s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(294.54545454545456 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="-0.12285012285012284s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(327.27272727272725 50 50)">
            <rect x="49" y="27" rx="0.6" ry="0.6" width="2" height="12" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.3513513513513513s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
            </g>
        </svg>
    )
}

export default Spinner;