import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
export default function IndexPage() {
  const rokok = [
    {
      judul: "Rokok 1",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "test",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 3",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 4",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 5",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 6",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 7",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 8",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 9",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 10",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 11",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 12",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Rokok 13",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "/assets/image/hinataaaa.jpg",
    },
    {
      judul: "Rokok 14",
      deskripsi: "Rokok dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
  ];
  const produk = [
    {
      judul: "Produk 1",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "test",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 3",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 4",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 5",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 6",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 7",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 8",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 9",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 10",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 11",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 12",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 13",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
    {
      judul: "Produk 14",
      deskripsi: "Produk dengan rasa yang khas dan harga terjangkau.",
      gambar: "https://heroui.com/images/fruit-1.jpeg",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex min-h-screen flex-col gap-4 md:gap-6 lg:gap-8 px-4 md:px-6">
        <div className="flex justify-center gap-4 md:gap-6 items-center flex-col w-full">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Gemilang Abadi
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
            <Button className="w-full sm:w-auto" color="default">
              Hubungi Kami
            </Button>
            <Button className="w-full sm:w-auto" color="secondary">
              Lihat Dari Google Maps
            </Button>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <Image
              alt="HeroUI hero Image"
              className="w-full h-auto"
              src="/assets/image/store.jpg"
            />
          </div>
        </div>

        {/* Bagian Produk */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-6">
          Produk
        </h2>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max md:flex-wrap md:justify-center text-black">
            {produk.map((produks, index) => (
              <div
                key={`product-${index}`}
                className="w-[180px] md:w-[200px] lg:w-[240px] flex-shrink-0"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Image
                    isZoomed
                    alt="HeroUI Fruit Image with Zoom"
                    className="w-full h-auto rounded-tr-none rounded-tl-none"
                    src={produks.gambar}
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm md:text-base">
                      {produks.judul}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      {produks.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Rokok */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-6">
          Rokok
        </h2>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max md:flex-wrap md:justify-center">
            {rokok.map((rokoks, index) => (
              <div
                key={`rokok-${index}`}
                className="w-[180px] md:w-[200px] lg:w-[240px] flex-shrink-0"
              >
                <div className="bg-white rounded-lg h-[40vh] overflow-hidden shadow-md text-black">
                  <Image
                    isZoomed
                    alt="HeroUI Fruit Image with Zoom"
                    className="w-full h-auto"
                    src={rokoks.gambar}
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm md:text-base">
                      {rokoks.judul}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      {rokoks.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Dupa */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-6">Dupa</h2>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max md:flex-wrap md:justify-center">
            {[...Array(10)].map((_, index) => (
              <div
                key={`dupa-${index}`}
                className="w-[180px] md:w-[200px] lg:w-[240px] flex-shrink-0"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Image
                    isZoomed
                    alt="HeroUI Fruit Image with Zoom"
                    className="w-full h-auto"
                    src="https://heroui.com/images/fruit-1.jpeg"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm md:text-base">
                      Dupa {index + 1}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      Dupa wangi berkualitas tinggi. Cocok untuk berbagai
                      keperluan.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Sembako */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-6">
          Sembako
        </h2>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max md:flex-wrap md:justify-center">
            {[...Array(10)].map((_, index) => (
              <div
                key={`sembako-${index}`}
                className="w-[180px] md:w-[200px] lg:w-[240px] flex-shrink-0"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Image
                    isZoomed
                    alt="HeroUI Fruit Image with Zoom"
                    className="w-full h-auto"
                    src="https://heroui.com/images/fruit-1.jpeg"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm md:text-base">
                      Sembako {index + 1}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                      Kebutuhan pokok sehari-hari dengan harga terjangkau.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
