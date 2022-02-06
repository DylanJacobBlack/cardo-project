const CustomizableIcon = (props) => {
  const Star = (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.1722 19.8313C31.0267 15.2822 28.0027 0 28.0027 0C28.0027 0 24.9733 15.3095 19.8332 19.8313C14.6931 24.3531 0 28 0 28C0 28 14.6876 31.6196 19.8332 36.1687C24.9788 40.7178 28.0027 56 28.0027 56C28.0027 56 31.0267 40.6905 36.1722 36.1687C41.3178 31.647 56 28 56 28C56 28 41.3124 24.3804 36.1722 19.8313Z"
        fill="#1D1D1C"
      />
    </svg>
  );

  const Cardo = (
    <svg
    width={props.width}
    height={props.height}
      viewBox="0 0 75 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4985 2.86811C13.5083 2.86811 14.5288 2.95405 15.56 3.12592C16.6127 3.27631 17.4506 3.48041 18.0736 3.73822C18.267 3.80267 18.3851 3.88861 18.4281 3.99603C18.4925 4.08196 18.5355 4.24309 18.557 4.47942L18.9759 8.95883C18.9759 9.02328 18.9222 9.06625 18.8148 9.08774C18.7074 9.10922 18.6322 9.07699 18.5892 8.99106C17.9877 7.22937 17.1283 5.88662 16.0111 4.9628C14.894 4.01751 13.5512 3.54486 11.9829 3.54486C10.522 3.54486 9.21146 3.94232 8.05132 4.73722C6.91267 5.51065 6.01034 6.62781 5.34434 8.08873C4.69982 9.54964 4.37756 11.2576 4.37756 13.2127C4.37756 15.1892 4.71056 16.9294 5.37656 18.4333C6.06405 19.9157 6.9986 21.0651 8.18023 21.8815C9.38333 22.6764 10.7583 23.0738 12.3052 23.0738C13.7876 23.0738 15.0336 22.6764 16.0434 21.8815C17.0531 21.0651 18.0092 19.7331 18.9115 17.8854C18.933 17.821 18.9974 17.7995 19.1048 17.821C19.2123 17.8425 19.266 17.8854 19.266 17.9499L18.7826 21.9459C18.7396 22.2037 18.6966 22.3756 18.6537 22.4615C18.6107 22.526 18.4925 22.6012 18.2992 22.6871C16.3227 23.3961 14.3247 23.7506 12.3052 23.7506C10.0064 23.7506 7.9439 23.3209 6.11776 22.4615C4.3131 21.5807 2.89516 20.3561 1.86393 18.7878C0.832694 17.2194 0.317078 15.4363 0.317078 13.4382C0.317078 11.3973 0.843436 9.58187 1.89615 7.99205C2.97035 6.38075 4.43127 5.12394 6.27889 4.22161C8.148 3.31928 10.2212 2.86811 12.4985 2.86811Z"
        fill="#1D1D1C"
      />
      <path
        d="M33.5313 21.6237C33.6172 21.6237 33.6709 21.6774 33.6924 21.7848C33.7354 21.8707 33.7139 21.9352 33.628 21.9781L30.3087 23.5572C30.2227 23.6002 30.1153 23.6217 29.9864 23.6217C29.6427 23.6217 29.3097 23.4391 28.9874 23.0738C28.6866 22.7086 28.4718 22.2145 28.3429 21.5914L26.9572 22.5582C26.463 22.9234 26.0011 23.192 25.5714 23.3639C25.1418 23.5142 24.6584 23.5894 24.1213 23.5894C23.1975 23.5894 22.4992 23.3853 22.0266 22.9771C21.5539 22.569 21.3176 21.9996 21.3176 21.2692C21.3176 20.6891 21.4573 20.2272 21.7366 19.8834C22.0158 19.5182 22.3596 19.2389 22.7678 19.0456C23.1975 18.8307 23.7883 18.5944 24.5402 18.3366L25.3459 18.0466L28.2462 16.9831V15.1462C28.2462 13.7712 28.128 12.7722 27.8917 12.1492C27.6769 11.5262 27.3009 11.2147 26.7638 11.2147C25.6252 11.2147 24.9806 12.0955 24.8302 13.8572C24.7658 14.5017 24.5724 14.9636 24.2502 15.2429C23.9494 15.5222 23.5197 15.6618 22.9611 15.6618C22.424 15.6618 22.0266 15.5544 21.7688 15.3396C21.5325 15.1033 21.4143 14.8025 21.4143 14.4373C21.4143 13.7927 21.7903 13.1804 22.5422 12.6004C23.2941 11.9988 24.1965 11.5154 25.2492 11.1502C26.3234 10.785 27.2687 10.6024 28.0851 10.6024C29.0304 10.6024 29.7931 10.9031 30.3731 11.5047C30.9747 12.0848 31.2755 12.9763 31.2755 14.1794V19.8834C31.2755 20.5065 31.3829 20.9899 31.5977 21.3336C31.834 21.6774 32.1563 21.8492 32.5645 21.8492C32.8653 21.8492 33.1768 21.774 33.499 21.6237H33.5313ZM28.2784 21.0436C28.2569 20.9577 28.2462 20.818 28.2462 20.6246V17.531L26.8605 18.1755C26.796 18.197 26.5812 18.2829 26.216 18.4333C25.8507 18.5622 25.5285 18.7878 25.2492 19.11C24.9914 19.4323 24.8625 19.8083 24.8625 20.2379C24.8625 20.7536 25.0236 21.1617 25.3459 21.4625C25.6896 21.7418 26.0763 21.8815 26.506 21.8815C26.8497 21.8815 27.2042 21.7633 27.5695 21.527L28.2784 21.0436Z"
        fill="#1D1D1C"
      />
      <path
        d="M42.5835 10.6024C43.0776 10.6024 43.5503 10.785 44.0015 11.1502C44.4741 11.4939 44.7104 11.9129 44.7104 12.407C44.7104 12.8582 44.5708 13.2341 44.2915 13.5349C44.0122 13.8142 43.647 13.9539 43.1958 13.9539C42.8735 13.9539 42.605 13.8894 42.3902 13.7605C42.1968 13.6316 41.9927 13.4382 41.7779 13.1804C41.5845 12.9656 41.4126 12.8152 41.2622 12.7293C41.1333 12.6219 40.9722 12.5681 40.7789 12.5681C40.564 12.5681 40.3277 12.6541 40.0699 12.826C39.8336 12.9763 39.4576 13.3093 38.942 13.825V20.7536C38.942 21.6129 39.1461 22.2037 39.5543 22.526C39.9625 22.8268 40.7144 22.9771 41.8101 22.9771C41.896 22.9771 41.939 23.0416 41.939 23.1705C41.939 23.2994 41.896 23.3639 41.8101 23.3639C41.0581 23.3639 40.4673 23.3531 40.0377 23.3316L37.4273 23.2994L35.526 23.3316C35.2038 23.3531 34.7633 23.3639 34.2047 23.3639C34.1403 23.3639 34.1081 23.2994 34.1081 23.1705C34.1081 23.0416 34.1403 22.9771 34.2047 22.9771C34.8708 22.9771 35.3219 22.8268 35.5582 22.526C35.7946 22.2037 35.9127 21.6129 35.9127 20.7536V14.6951C35.9127 14.0291 35.8268 13.5457 35.6549 13.2449C35.5045 12.9226 35.2575 12.7615 34.9137 12.7615C34.5485 12.7615 34.0329 12.9119 33.3669 13.2127H33.3024C33.238 13.2127 33.1843 13.159 33.1413 13.0515C33.1198 12.9441 33.1305 12.8797 33.1735 12.8582L37.6529 10.6668C37.7818 10.6238 37.857 10.6024 37.8785 10.6024C38.1148 10.6024 38.3297 10.8279 38.523 11.2791C38.7379 11.7088 38.8668 12.2996 38.9097 13.0515C39.7906 12.1492 40.5103 11.5154 41.0689 11.1502C41.649 10.785 42.1538 10.6024 42.5835 10.6024Z"
        fill="#1D1D1C"
      />
      <path
        d="M60.3461 21.2692C60.4105 21.2692 60.4643 21.3229 60.5072 21.4303C60.5717 21.5377 60.5824 21.6022 60.5394 21.6237L56.0923 23.7828L55.9311 23.815C55.7378 23.815 55.5552 23.6109 55.3833 23.2027C55.2329 22.7945 55.1362 22.2359 55.0932 21.527C53.5034 23.0309 51.8814 23.7828 50.2271 23.7828C49.2818 23.7828 48.4225 23.5357 47.649 23.0416C46.8971 22.5475 46.2955 21.8278 45.8444 20.8825C45.3932 19.9157 45.1676 18.7878 45.1676 17.4987C45.1676 15.8659 45.5436 14.5339 46.2955 13.5027C47.069 12.45 48.0143 11.6873 49.1314 11.2147C50.2701 10.742 51.4087 10.5057 52.5474 10.5057C53.3423 10.5057 54.1802 10.6346 55.061 10.8924V4.38274C55.061 3.6308 54.9858 3.0937 54.8354 2.77144C54.7065 2.44918 54.4702 2.28805 54.1265 2.28805C53.8472 2.28805 53.4497 2.40621 52.9341 2.64253H52.9019C52.8159 2.64253 52.7407 2.58882 52.6763 2.4814C52.6333 2.3525 52.6333 2.2773 52.6763 2.25582L57.4135 0.0322255L57.5424 0C57.6498 0 57.768 0.0537098 57.8969 0.16113C58.0258 0.247066 58.0903 0.333002 58.0903 0.418939V19.6256C58.0903 20.3561 58.1547 20.8717 58.2836 21.1725C58.434 21.4733 58.6703 21.6237 58.9926 21.6237C59.2719 21.6237 59.7123 21.5055 60.3139 21.2692H60.3461ZM51.9996 22.2359C53.0738 22.2359 54.0942 21.7848 55.061 20.8825V20.7213V12.8904C54.6743 12.3533 54.2339 11.9666 53.7398 11.7303C53.2671 11.4725 52.7085 11.3436 52.064 11.3436C50.9039 11.3436 50.0123 11.7518 49.3892 12.5681C48.7877 13.3631 48.4869 14.6628 48.4869 16.4675C48.4869 18.2721 48.8092 19.6901 49.4537 20.7213C50.0982 21.7311 50.9468 22.2359 51.9996 22.2359Z"
        fill="#1D1D1C"
      />
      <path
        d="M67.5572 23.7828C66.2252 23.7828 65.0543 23.482 64.0445 22.8805C63.0563 22.2574 62.2936 21.4303 61.7565 20.3991C61.2194 19.3463 60.9508 18.2077 60.9508 16.9831C60.9508 15.5866 61.3053 14.405 62.0143 13.4382C62.7233 12.45 63.6256 11.7195 64.7213 11.2469C65.817 10.7527 66.9449 10.5057 68.105 10.5057C69.437 10.5057 70.5971 10.8172 71.5854 11.4402C72.5737 12.0633 73.3256 12.8904 73.8412 13.9216C74.3783 14.9314 74.6469 16.0163 74.6469 17.1765C74.6469 18.4655 74.3246 19.6149 73.6801 20.6246C73.0356 21.6129 72.1655 22.3863 71.0698 22.9449C69.9956 23.5035 68.8247 23.7828 67.5572 23.7828ZM68.5239 23.106C69.3618 23.106 69.9956 22.6979 70.4253 21.8815C70.8764 21.0436 71.102 19.8512 71.102 18.3044C71.102 16.8005 70.9087 15.5115 70.522 14.4373C70.1352 13.3631 69.6304 12.5574 69.0073 12.0203C68.3843 11.4617 67.7183 11.1824 67.0093 11.1824C65.2906 11.1824 64.4312 12.7185 64.4312 15.7907C64.4312 17.2302 64.6139 18.5085 64.9791 19.6256C65.3443 20.7213 65.8384 21.5807 66.4615 22.2037C67.0845 22.8053 67.772 23.106 68.5239 23.106Z"
        fill="#1D1D1C"
      />
    </svg>);

    switch (props.icon) {
      case "star":
        return Star;
      case "cardo":
        return Cardo;
      default:
        return null;
    }
};

export default CustomizableIcon;
