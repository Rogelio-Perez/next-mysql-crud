import React from "react"
import { Layout } from "../components/Layout"

function about() {
  return (
    <Layout className="">
      <section className="text-gray-400 bg-gray-100 body-font h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
              Razvi
            </h1>
            <p className="mb-8 leading-relaxed">
              Se realizo este proyecto como una practica, para depues
              implementar estas tecnologias en E-Commerce que puedan entrar a
              produccion.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
    </Layout>
  )
}

export default about
