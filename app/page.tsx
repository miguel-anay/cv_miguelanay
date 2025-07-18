import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "./ui/themeToggle/themeToggle";

export default function Home() {
  return (
    <div className="">
      {/* Header */}

      <header className="max-w-5xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 drop-shadow-sm hover:brightness-110 transition-all"
          >
            Miguel-anay.nom.pe
            <span className="block text-sm text-zinc-500 dark:text-zinc-400 font-normal">
              Ing.Anay Gomez,Miguel Angel
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Inicio
            </Link>
            {/* <Link
              href="/projects"
              className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Proyectos
            </Link> */}
            <ThemeToggleButton />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-20 text-zinc-800 dark:text-zinc-200">
          <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
          <p className="text-lg leading-relaxed tracking-wide">
            Ingeniero Industrial y empresario con especialización sólida en
            desarrollo web. Más de 12 años de experiencia en empresas como
            <strong className="text-blue-600 dark:text-blue-400">
              {" "}
              Encora
            </strong>{" "}
            y
            <strong className="text-blue-600 dark:text-blue-400">
              {" "}
              Prosegur
            </strong>
            , participando en proyectos de alto impacto para el sector
            financiero y corporativo. Especialista en{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              React, JavaScript,NEXTJS, .NET , SQL,Pyhon,PHP artisan,
              Wordpress,N8N
            </span>
            , enfocado en construir soluciones seguras, escalables y orientadas
            al usuario. Me apasiona trabajar en equipo, liderar iniciativas
            tecnológicas y optimizar procesos con sistemas web inteligentes.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white">
              🚀 Proyectos
            </h2>
            {/* <Link
              href="/projects"
              className="text-blue-600 hover:underline font-medium transition-all"
            >
              view all →
            </Link> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  Agencia Virtual
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Profuturo AFP
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                Plataforma para la gestión de trámites y registros de afiliados.
              </p>

              <div className="mb-5 rounded-lg overflow-hidden">
                <a
                  href="https://enlinea.profuturo.com.pe/agenciavirtual/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity duration-200"
                >
                  <img
                    src="/agencia_virtual.png"
                    alt="Captura de Agencia Virtual"
                    className="w-full object-cover rounded-lg shadow-sm"
                  />
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <img
                  src="https://ext.same-assets.com/2298632013/2447866119.svg"
                  alt="React Logo"
                  className="w-6 h-6"
                  title="React"
                />
                <img
                  src="https://ext.same-assets.com/2298632013/4205843224.svg"
                  alt=".NET Logo"
                  className="w-6 h-6"
                  title=".NET"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  Clave Web.
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Profuturo AFP.
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                Sistema para la recuperación y actualización de credenciales.
              </p>

              <div className="mb-5 rounded-lg overflow-hidden">
                <a
                  href="https://claveweb.profuturo.com.pe/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity duration-200"
                >
                  <img
                    src="/claveweb.png"
                    alt="Captura de Clave Web"
                    className="w-full object-cover rounded-lg shadow-sm"
                  />
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <img
                  src="https://ext.same-assets.com/2298632013/2447866119.svg"
                  alt="React Logo"
                  className="w-6 h-6"
                  title="React"
                />
                <img
                  src="https://ext.same-assets.com/2298632013/4205843224.svg"
                  alt=".NET Logo"
                  className="w-6 h-6"
                  title=".NET"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  Disfruta Profuturo.
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Profuturo AFP.
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                Portal de promociones y cupones para afiliados.
              </p>

              <div className="mb-5 rounded-lg overflow-hidden">
                <a
                  href="https://www.disfrutaprofuturo.com.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity duration-200"
                >
                  <img
                    src="/disfruta.png"
                    alt="Captura de Disfruta Profuturo"
                    className="w-full object-cover rounded-lg shadow-sm"
                  />
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <img
                  src="https://ext.same-assets.com/2298632013/2447866119.svg"
                  alt="React Logo"
                  className="w-6 h-6"
                  title="React"
                />
                <img
                  src="https://ext.same-assets.com/2298632013/4205843224.svg"
                  alt=".NET Logo"
                  className="w-6 h-6"
                  title=".NET"
                />
              </div>
            </div>

            {/* Project 4 */}
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  FacutuFacil
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Yiwu import corporation
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                Landing Web y sistema de facturacion electronica, Emprendimiento
                propio.
              </p>

              <div className="mb-5 rounded-lg overflow-hidden">
                <a
                  href="https://factufacil.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity duration-200"
                >
                  <img
                    src="/factufacil.png"
                    alt="Captura de FactuFacil"
                    className="w-full object-cover rounded-lg shadow-sm"
                  />
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <img
                  src="https://ext.same-assets.com/2298632013/2447866119.svg"
                  alt="React Logo"
                  className="w-6 h-6"
                  title="React"
                />
                <img
                  src="https://ext.same-assets.com/2298632013/4205843224.svg"
                  alt=".NET Logo"
                  className="w-6 h-6"
                  title=".NET"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-10">
            Experiencia
          </h2>

          <ol className="relative border-s border-zinc-200 dark:border-zinc-700">
            {/* EXPERIENCIA 1 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900" />
              <time className="mb-1 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">
                Noviembre 2020 - Abril 2025
              </time>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Software Engineer III
              </h3>
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-1">
                  Encora Company ↗{" "}
                  <Link
                    href="/TRABAJO/ENCORA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    📄 Descargar certificado
                  </Link>
                </p>
                <Image
                  src="/enncora.png"
                  alt="Encora Company Logo"
                  width={100}
                  height={50}
                  className="w-24 h-auto mb-4"
                ></Image>
              </div>
              <p>Tecnologías: React.js, Nextjs, Vue,Dockerm,Angular</p>
              <br></br>{" "}
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300 text-sm">
                <li>
                  <strong>Agencia Virtual:</strong> Contribuí al desarrollo de
                  una plataforma de autoservicio para afiliados, optimizando la
                  gestión de trámites como actualizaciones de datos y
                  solicitudes de jubilación. El sistema redujo
                  significativamente la carga operativa del personal de atención
                  al cliente, incrementando la eficiencia y disponibilidad de
                  los servicios en línea.
                </li>
                <li>
                  <strong>Clave Web:</strong> Participé en la implementación de
                  un sistema seguro y automatizado para la recuperación y
                  actualización de credenciales de acceso. Esta solución mejoró
                  la experiencia del usuario final y fortaleció la seguridad
                  digital de la plataforma, reduciendo incidencias de soporte
                  relacionadas con contraseñas en más de un 40%.
                </li>
                <li>
                  <strong>Disfruta Profuturo:</strong> Desarrollé el frontend de
                  un portal de beneficios exclusivo para afiliados, enfocado en
                  promociones y cupones. El proyecto incrementó el engagement de
                  los usuarios con la marca y aportó valor diferencial a la
                  propuesta de fidelización de Profuturo.
                </li>
              </ul>
            </li>

            {/* EXPERIENCIA 2 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900" />
              <time className="mb-1 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">
                Abril 2018 - Marzo 2020
              </time>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Analista de procesos
              </h3>
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-1">
                  Prosegur ↗{" "}
                  <Link
                    href="/TRABAJO/prosegur_certificado.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    📄 Descargar certificado
                  </Link>
                </p>
                <Image
                  src="/prosegur.png"
                  alt="Encora Company Logo"
                  width={100}
                  height={50}
                  className="w-24 h-auto mb-4"
                ></Image>
              </div>
              <p>
                Tecnologías: React.js, PHP Laravel, MySQL, SQL Server, Android
                Studio
              </p>
              <br></br>{" "}
              {/* <br>
                <em>
                  Tecnologías: React.js, PHP Laravel, MySQL, SQL Server, Android
                  Studio
                </em>
              </br> */}
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300 text-sm">
                <li>
                  <strong>Web Audit:</strong> Desarrollé una plataforma web para
                  la auditoría de abastecimiento de cajeros automáticos (ATM)
                  basada en análisis de video. La solución permitió mejorar la
                  trazabilidad de las operaciones y asegurar el cumplimiento de
                  buenas prácticas, lo que redujo los incidentes operativos y
                  fortaleció los procesos de control interno.
                </li>
                <li>
                  <strong>Web PER (Programa de Evaluación de Riesgos):</strong>{" "}
                  Contribuí en la creación de un sistema de monitoreo en tiempo
                  real de rutas y vehículos, mediante integración con GPS, mapas
                  interactivos y alertas automáticas por desvíos o paradas. Este
                  sistema optimizó la supervisión logística y redujo los riesgos
                  asociados al transporte de valores.
                </li>
                <li>
                  <strong>App de Supervisiones:</strong> Implementé una
                  aplicación móvil en Android para el personal de campo, que
                  permitió capturar evidencias fotográficas en tiempo real sobre
                  el cumplimiento de protocolos durante rutas operativas. Esto
                  fortaleció la supervisión descentralizada y mejoró la calidad
                  del reporte operativo.
                </li>
              </ul>
            </li>
            {/* EXPERIENCIA 3 */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900" />
              <time className="mb-1 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">
                abril 2014- marzo 2018
              </time>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Desarrollador web y FULL STACK .NET
              </h3>
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-1">
                  Medios Industriales ↗{" "}
                  <Link
                    href="/TRABAJO/Medios_Industriales.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    📄 Descargar certificado
                  </Link>
                </p>

                <Image
                  src="/prosegur.png"
                  alt="Encora Company Logo"
                  width={100}
                  height={50}
                  className="w-24 h-auto mb-4"
                ></Image>
              </div>
              <p>
                Tecnologías: React.js, PHP Laravel, MySQL, SQL Server, Android
                Studio
              </p>
              <br></br>{" "}
              {/* <br>
                <em>Tecnologías: C#.NET, VB.NET, SQL Server, MySQL</em>
              </br> */}
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300 text-sm">
                <li>
                  <strong>Control de Tiempos Operativos (CTO):</strong>{" "}
                  Desarrollé un sistema interno para el sinceramiento y control
                  preciso de las jornadas laborales del personal operativo. Esta
                  solución permitió identificar ineficiencias, optimizar la
                  asignación de recursos y mejorar la productividad general de
                  la empresa al asegurar el cumplimiento de los horarios
                  establecidos.
                </li>
                <li>
                  <strong>Balizas:</strong> Implementé una plataforma de
                  monitoreo en tiempo real de unidades blindadas mediante GPS,
                  con alertas inteligentes ante desvíos, detenciones no
                  programadas o anomalías. Esto mejoró significativamente la
                  seguridad en ruta y permitió una respuesta operativa más
                  rápida y eficaz ante eventos críticos.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6 flex items-center gap-2">
            🎓 Educación & Especialización
          </h2>

          <div className="space-y-6">
            {/* Universidad */}
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Universidad Nacional de Ingeniería
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Ingeniero Industrial (2004 – 2012) CIP:301084
              </p>
            </div>

            {/* Especialización */}
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                Especialización Técnica
              </h3>
              <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>
                  <span className="font-medium">Módulo de Base de Datos:</span>{" "}
                  Administración de SQL Server
                  <br />
                  <Link
                    href="/ESTUDIO/db_data.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    📄 Descargar certificado
                  </Link>
                </li>
                <li>
                  <span className="font-medium">
                    Gen AI Training Path – Technical Track
                  </span>
                  <br />
                  <Link
                    href="https://www.credly.com/badges/c4c59c1f-de34-47e4-b2c1-7ca90ee3403b/linked_in?t=stx5in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    📄 Descargar certificado
                  </Link>
                </li>

                <li>
                  <span className="font-medium">AZURE FUNDAMENTS AZ-900</span>
                  <br />
                  <Link
                    href="/ESTUDIO/Azure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    📄 Descargar certificado
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <Link
            href="https://www.linkedin.com/in/miguel-anay/"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            LinkedIn: miguel-anay/
          </Link>

          <span className="text-zinc-900 font-medium">2025</span>
        </div>
      </footer>
    </div>
  );
}
