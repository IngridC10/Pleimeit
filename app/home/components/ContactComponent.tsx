import Image from "next/image";

const ContactComponent = () => {
  return (
    <section className="bg-[#F7F8FE] py-20">
      <div className="container mx-auto px-6 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - FORM */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-textBlack mb-4">
              ¿Tienes dudas?
            </h2>

            <p className="text-textBlackSecundary mb-8 leading-relaxed">
              Cuéntanos qué tienes en mente. Nos encantará escucharte y ver cómo
              podemos ayudarte a hacer crecer tu comunidad deportiva.
              <br />
              Completa el formulario y te responderemos pronto ⚡
            </p>

            <form className="space-y-6">
              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-textBlack">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Ejemplo: Joshep Montoya"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-textBlack">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="Ejemplo: joseph@email.com"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-textBlack">
                    Motivo del mensaje
                  </label>
                  <input
                    type="text"
                    placeholder="Ejemplo: Soporte técnico"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-textBlack">
                    Número
                  </label>
                  <div className="mt-1 flex gap-2">
                    <select className="rounded-lg border border-gray-200 px-3 py-3 text-sm focus:outline-none">
                      <option>PE</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Número de teléfono"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                    />
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-medium text-textBlack">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte."
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-purpleBackground hover:bg-purpleBackground/90 text-white font-semibold px-8 py-3 rounded-full transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/images/home/Workingman.png"
              alt="Contacto Pleimeit"
              width={620}
              height={620}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
