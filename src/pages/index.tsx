import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex h-screen">
        <div className="flex juscetify-center gap-[1vw] items-center flex-col w-full">
          <h1 className="font-bold text-[2vw] ">Gemilang Abadi</h1>
          <div className="flex justify-center items-center gap-[1vw]">
            <Button color="default">Hubungi Kami</Button>
            <Button color="secondary">Lihat Dari Google Maps</Button>
          </div>
          <Image
            alt="HeroUI hero Image"
            src="/public/assets/image/store.jpg"
            width={1000}
          />
        </div>
        {/* bagian carousel product */}
      </section>
    </DefaultLayout>
  );
}
