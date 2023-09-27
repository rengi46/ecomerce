import React from 'react'
import AboutCard from './components/aboutCard/aboutCard'
import AboutHeader from './components/headerAbout/AboutHeader'

const AboutUs = () => {

  return (
    <div>
      <AboutHeader/>
      <AboutCard
        title='OFRECEMOS PRODUCTOS CBD DE ALTA CALIDAD'
        subTitle='NUESTROS PRODUCTOS'
        text='Productos que cumplen con los más altos estándares exigidos por los consumidores y que cumplen con las normativas legales actuales también.
        Las inflorescencias que vendemos se basan en niveles medios y fuertes de CBD no psicoactivo (Cannabidiol), para permitirnos aprovechar los beneficios de usar productos a base de cannabis sin efectos psicoactivos.'
        // video={"blob:https://www.youtube.com/2384d6df-2415-4a56-baa8-0b4f20b98505"}
        image={"/tienda.jpeg"}
      />
      <AboutCard
        reverse = {true}
        title='TE OFRECEMOS EL MEJOR CBD DE ESPAÑA Y EUROPA'
        subTitle='DISTRIBUCIÓN CBD'
        text='Participamos en muchas ferias del sector en varias ciudades europeas cada año. En 2019 ganamos en la más grande y mejor feria de Europa que se hace en Roma (Canapa-Mundi) la mayor feria del Cannabis Sativa L. o mejor conocido como CBD.
        Ganamos con la nuestra Black Mamba el primer premio como mejor producto del año 2019, esto nos da más fuerza para seguir haciéndolo cada día mejor y seguir proporcionando las mejores variedades de Flores de CBD del momento.'
        video={"https://www.youtube.com/embed/uLZD5KuUgbc"}
      />
      <AboutCard
        title='EL CÁÑAMO TIENE MUCHO MÁS USOS'
        subTitle='BENEFICIOS'
        text='El cáñamo es una planta que se ofrece a muchos usos más allá del tratamiento terapéutico de las personas y los animales.
        En Sweed Dreams Distribution CBD creemos que el mundo sería mucho mejor si el ser humano conociera y estubiese más informado, podría descubrir que el mundo se puede cambiar con una planta que en tan solo 6 meses de crecimiento puede llegar a cambiar muchas cosas. Prueba los mejores cogollos de cannabis CBD.
        Animate a no contribuir a deforestaciones, a usos de plásticos y medicinales químicos porque una planta que tarda tan solo 6 meses es crecer podría ayudarnos a cambiar el mundo.'
        video={"https://www.youtube.com/embed/6ndhQWPjbRw"}
      />
    </div>
  )
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
}




export default AboutUs