import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Profile from "../../../public/img/proj2.png";

function page() {
  return (
    <>
      <main className="flex flex-col bg-clr1 min-h-screen text-black text-sm leading-6">
        <Navbar isProjetosPage={true} />
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-10 sm:p-12 p-2">
          <div className="flex flex-col space-y-4 sm:mx-12 mx-4 sm:w-2/5">
            <h1>
              Lorem ipsum per conubia nostra, per inceptos himenaeos. Sed a
              neque facilisis, ultricies est id, tempor velit. Sed a aliquet
              tortor. Maecenas non nulla rutrum, accumsan risus quis, gravida
              massa. Duis porttitor non odio non aliquam. Morbi gravida risus
              nec quam euismod ultrices. Praesent facilisis nisl ut mauris
              dapibus egestas.
            </h1>
            <h1>
              Duis sollicitudin varius dolor, nec sollicitudin ante placerat
              non. Ut eget risus eu mi tempor semper quis sed arcu. Donec nunc
              magna, viverra vitae nisl quis, fermentum imperdiet enim. Etiam
              tincidunt molestie magna sit amet dictum. Nunc egestas iaculis
              lacus a sollicitudin. Pellentesque a faucibus turpis. Vivamus id
              justo egestas, tempor libero in, dictum mi. Donec sem nibh,
              consequat ut congue quis, congue pulvinar leo. Donec non faucibus
              nunc. Etiam egestas gravida tortor sed vestibulum. Suspendisse
              congue risus felis, et ultrices urna lacinia vitae.
            </h1>
            <h1>
              Etiam consequat libero id sapien ullamcorper, eu condimentum augue
              fringilla. Suspendisse tristique, erat vel interdum hendrerit.
            </h1>
          </div>
          <div className="flex sm:w-3/5 sm:h-custom1 h-96 mt-4 sm:mt-0">
            <div className="relative w-full">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
