interface BannerProps {
  url: string;
  title: string;
  price: number;
}

function Banner() {
  const BannerSrc: BannerProps[] = [
    {
      url: "'http://localhost:3000/banner.png'",
      title: "Mountain Climbing at Kota Baru",
      price: 4900000,
    },
    {
      url: "'http://localhost:3000/banner.png'",
      title: "Mountain Climbing at Kota Baru",
      price: 4900000,
    },
    {
      url: "'http://localhost:3000/banner.png'",
      title: "Mountain Climbing at Kota Baru",
      price: 4900000,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {BannerSrc.map((items, idx) => (
        <div className="first:mr-6 last:ml-6 min-w-[1044px]" key={idx}>
          <div
            className={
              "block w-full h-[600px] bg-banner-bg first:bg-right last:bg-left bg-no-repeat bg-cover"
            }
          >
            <div className="container">
              <div className="flex justify-end py-20 px-20">
                <button className="bg-white rounded-full w-10 h-10">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.115 6.55699C7.46962 6.55699 5.35076 8.6711 5.35076 11.2475C5.35076 12.5025 5.8499 13.6424 6.66965 14.4871L14.9997 22.9315L23.1788 14.6372C23.1871 14.6288 23.1954 14.6205 23.204 14.6124C24.0985 13.7568 24.649 12.5652 24.649 11.2475C24.649 8.67111 22.5301 6.55699 19.8848 6.55699C19.3105 6.55699 18.6381 6.87864 17.89 7.54127C17.1608 8.18711 16.5079 9.02504 15.982 9.76269C15.7556 10.0801 15.3898 10.2686 14.9999 10.2686C14.61 10.2686 14.2442 10.0801 14.0178 9.76269C13.4919 9.02504 12.8389 8.18711 12.1098 7.54127C11.3616 6.87864 10.6893 6.55699 10.115 6.55699ZM2.93848 11.2475C2.93848 7.31068 6.16569 4.14471 10.115 4.14471C11.56 4.14471 12.7898 4.92116 13.7092 5.73548C14.1826 6.15481 14.6157 6.62169 14.9999 7.08128C15.384 6.62169 15.8171 6.15481 16.2906 5.73548C17.2099 4.92116 18.4398 4.14471 19.8848 4.14471C23.8341 4.14471 27.0613 7.31067 27.0613 11.2475C27.0613 13.2485 26.2239 15.0554 24.8846 16.3429L15.8587 25.496C15.6321 25.7258 15.3228 25.8552 15 25.8552C14.6772 25.8553 14.3679 25.7259 14.1412 25.4961L4.94281 16.1716C3.70427 14.8975 2.93848 13.1609 2.93848 11.2475Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center text-white mt-64 ml-10">
                <div className="w-3/12">
                  <h1 className="text-2xl font-semibold">{items.title}</h1>
                  <p className="pt-4 font-thin">
                    Start from {formatPrice(items.price)}
                  </p>
                </div>
                <div className="w-9/12 flex justify-end mr-10">
                  <button className="bg-blue-800 px-5 py-2 rounded-md hover:bg-blue-700">
                    Make a Reversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Banner;
