import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import BgImage from "@/components/BgImage";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <Layout title="Website Travel">
      {/* Banner Start */}
      <section className="flex overflow-x-scroll">
        <Banner />
      </section>
      {/* End of Banner */}

      {/* Partner Start */}
      <section className="container mx-auto">
        <div className="flex py-10 space-x-16 items-center justify-center">
          <div className="w-2/12">
            <Image
              src="/partner/rosewood.png"
              width={172.96}
              height={40.68}
              quality={100}
            />
          </div>
          <div className="w-2/12">
            <Image
              src="/partner/oysho.png"
              width={154.64}
              height={30}
              quality={100}
            />
          </div>
          <div className="w-3/12 flex items-center justify-center">
            <Image
              src="/partner/pull-bear.png"
              width={191.82}
              height={30}
              quality={100}
            />
          </div>
          <div className="w-2/12 flex items-center justify-center">
            <Image
              src="/partner/jp-morgan.png"
              width={194.55}
              height={40.68}
              quality={100}
            />
          </div>
          <div className="w-2/12">
            <Image
              src="/partner/marriott.png"
              width={172.96}
              height={40.68}
              quality={100}
            />
          </div>
        </div>
      </section>
      {/* End of Partner */}

      {/* Most People Start */}
      <section className="p-10 bg-blue-100">
        <div className="container mx-auto">
          <div className="flex space-x-5">
            <div className="w-2/12">
              <h1 className="text-2xl font-semibold">
                Most People Go In Summer
              </h1>

              <BgImage
                className="mt-8 h-[337px] bg-snow-hills"
                classInfo="top-3/4 left-5"
                title="Snow Hills"
                location="Jakarta, Indonesia"
              />
            </div>
            <div className="w-10/12">
              <div className="flex space-x-5">
                <div className="w-4/12 flex flex-col space-y-5">
                  <BgImage
                    className="h-[207px] bg-buck-kit rounded-xl"
                    classInfo="top-[130px] left-5"
                    title="Buck Kit"
                    location="Parlay, Sammer"
                  />
                  <BgImage
                    className="h-[207px] bg-village rounded-xl"
                    classInfo="top-[130px] left-5"
                    title="Village"
                    location="Puncak, Jakarta"
                  />
                </div>
                <div className="w-4/12 flex flex-col space-y-5">
                  <BgImage
                    className="h-[207px] bg-new-dream rounded-xl"
                    classInfo="top-[130px] left-5"
                    title="New Dream"
                    location="Lembang, Surabaya"
                  />
                  <BgImage
                    className="h-[207px] bg-ithaly rounded-xl"
                    classInfo="top-[130px] left-5"
                    title="Ithaly"
                    location="Rumah Tua, Semarang"
                  />
                </div>
                <div className="w-4/12 flex flex-col space-y-5">
                  <BgImage
                    className="h-full bg-lake-silent rounded-xl"
                    classInfo="top-[82%] left-5"
                    title="Lake Silent"
                    location="Bandung, Indonesia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Most People */}

      {/* Customer Review Start */}
      <section className="p-10 bg-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">
            Our Happy Customers
          </h1>
          <div className="flex space-x-4 items-center h-80">
            <div className="w-4/12 space-x-3 relative">
              <div className="absolute -top-10">
                <Image
                  src="/customers/customer-1.png"
                  width="80"
                  height="80"
                  quality="100"
                />
              </div>
              <div className="absolute top-20 left-32">
                <Image
                  src="/customers/customer-2.png"
                  width="80"
                  height="80"
                  quality="100"
                />
              </div>
              <div className="absolute -top-32 left-52">
                <Image
                  src="/customers/customer-3.png"
                  width="80"
                  height="80"
                  quality="100"
                />
              </div>
            </div>
            <div className="w-4/12 h-5/6 relative">
              <div className="bg-white border border-slate-200 rounded-lg p-5 mt-10">
                <div className="text-center absolute left-[168px] top-0">
                  <Image
                    src="/customers/customer-7.png"
                    width="80"
                    height="80"
                    quality="100"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mt-5 p-5">
                  Anne Grande Latte
                </h3>
                <p className="text-md font-thin text-slate-400 text-center">
                  For me, traveling is like finding a new future that I might
                  suit with. So, spending most of my time to travel was good
                  choice.
                </p>
                <div className="mt-4 text-center">
                  <Image
                    src="/customers/rate.png"
                    height="24"
                    width="144"
                    quality="100"
                  />
                </div>
              </div>
            </div>
            <div className="w-4/12 space-x-3 relative">
              <div className="absolute -top-10 left-3/4">
                <Image
                  src="/customers/customer-6.png"
                  width="80"
                  height="80"
                  quality="100"
                />
              </div>
              <div className="absolute top-20 left-12">
                <Image
                  src="/customers/customer-4.png"
                  width="80"
                  height="80"
                  quality="100"
                />
              </div>
              <div className="absolute -top-32 left-32">
                <Image
                  src="/customers/customer-5.png"
                  width="80"
                  height="80"
                  quality="100"
                />
              </div>
            </div>
          </div>
          <div className="text-center py-7">
            <Link href="/">
              <a className="underline text-blue-600 hover:text-blue-400">
                View All Stories
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* End of Customer Review */}
    </Layout>
  );
}

export default Home;
