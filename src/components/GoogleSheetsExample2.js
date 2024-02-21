import { InfoIcon, ExternalLinkIcon } from 'lucide-react';
import { Pre } from './Pre';
import Link from 'next/link';

export const GoogleSheetsExample2 = () => {
  return (
    <>
      <div className="border-l-4 border-blue-500 text-sm px-1 bg-opacity-[0.6] p-3 pl-5 text-blue-500 font-semibold">
        <p className="font-bold text-xl">
          <InfoIcon className="w-6 inline mb-1" /> Tip
        </p>
        <p className="list-css-span">
          Cuando trabajas con múltiples arrays de listas obtenidas de un archivo
          CSV, es posible que desees optimizar el rendimiento del renderizado.
          Una técnica efectiva es utilizar el método<span>reduce</span>en
          JavaScript. reduce te permite acumular un valor único al iterar sobre
          un array, en este caso, un objeto que contiene varias listas. Aquí hay
          una explicación más detallada en la cual utilizo<span>papaparse</span>{' '}
          para manejar el CSV:
        </p>
      </div>
      <p className="list-css-span">
        📝<span>PapaParse</span>es una biblioteca de JavaScript que se utiliza
        para analizar archivos CSV en el navegador o en entornos Node.js. La
        biblioteca facilita el trabajo con datos en formato CSV, proporcionando
        funciones para convertir cadenas CSV en objetos JavaScript y viceversa.
      </p>
      <p className="list-css-span">
        Algunas características clave de<span>PapaParse</span>incluyen:
      </p>
      <ol>
        <li>
          Facilidad de uso: PapaParse simplifica el proceso de análisis de
          archivos CSV en comparación con implementaciones manuales. Proporciona
          una interfaz fácil de usar para trabajar con datos CSV.
        </li>
        <li>
          Soporte para diferentes formatos: Puede manejar una variedad de
          formatos CSV, incluso aquellos con delimitadores personalizados,
          saltos de línea y otros ajustes específicos.
        </li>
        <li>
          Procesamiento en segundo plano: PapaParse puede ejecutarse en segundo
          plano (usando Web Workers) para no bloquear el hilo principal del
          navegador, permitiendo la carga y procesamiento eficiente de grandes
          conjuntos de datos CSV.
        </li>
        <li>
          Configuración de opciones: Ofrece diversas opciones de configuración,
          como la especificación del delimitador, la fila de encabezado, el
          manejo de comillas, entre otras, para adaptarse a las necesidades
          específicas de análisis.
        </li>
      </ol>
      <p>Lo primero que tenemos que hacer es instalar la dependencia:</p>
      <Pre lang="bash">{
        /*bash */ `
        npm install papaparse
        `
      }</Pre>
      <p>
        Pueden estudiar la documentación para entender que opciones de
        configuración y manipulación del CSV tiene
        <Link
          href="https://www.papaparse.com/docs"
          className="mx-1 underline text-blue-500 link"
        >
          Papaparse
          <ExternalLinkIcon className="link-icon" />
        </Link>
      </p>
      <p>Bien, ahora vamos con el componente:</p>
      <Pre lang="javascript">{
        /*javascript */ `
        import { useState, useEffect } from "react";
        import Papa from "papaparse";
        
        export const useData = (columnNamesFetch, customURL) => {
          const [data, setData] = useState([]);
          const [loading, setLoading] = useState(true);
        
          useEffect(() => {
            const fetchData = async () => {
              try {
                const res = await fetch(customURL);
                const csv = await res.text();
        
                const parsedCsv = [];
        
                let firstLineSkipped = false;
        
                Papa.parse(csv, {
                  header: false,
                  dynamicTyping: true,
                  skipEmptyLines: true,
                  step: (results) => {
                    if (!firstLineSkipped) {
                      firstLineSkipped = true;
                      return;
                    }
        
                    const rowData = columnNamesFetch.reduce(
                      (acc, columnName, index) => {
                        let value = results.data[index];
        
                        if (typeof value === "string") {
                          value = value
                            .replace(/""/g, '"')
                            .replace(/(\?:\\r\\n|\\r|\\n)/g, " ");
                        }
        
                        acc[columnName] = value;
                        return acc;
                      },
                      {}
                    );
                    parsedCsv.push(rowData);
                  },
                  complete: () => {
                    setData(parsedCsv);
                    setLoading(false);
                  },
                  error: (error) => {
                    console.error("Error al parsear el CSV 😢:", error);
                    setLoading(false);
                  },
                });
              } catch (error) {
                console.error("Error al hacer el fetching de data 🤔:", error);
                setLoading(false);
              }
            };
        
            fetchData();
          }, [columnNamesFetch, customURL]);
        
          return { data, loading };
        };
        
        export default useData;
        
        `
      }</Pre>
      <p>
        De esta manera, creamos un componente reutilizable que nos permite
        renderizar diferentes arrays fácilmente. Este enfoque proporciona
        flexibilidad al adaptarse a diferentes conjuntos de datos,
        permitiéndonos utilizar el mismo componente para diversos propósitos.
        Por ejemplo:
      </p>
      <Pre lang="javascript">{
        /*javascript */ `
        import { CSV_URL } from "@/Constants";
        import useData from '@/ubicacion-del-componente'

        const columnName = [
            "ITEM",
            "TITLE",
            "DESCRIPTION",
            "PRICE",
            "IMAGE",
            "URL",
          ];

        export const ComponentExample = () => {
            const { data } = useData(columnName, CSV_URL)

            return (
                <>
                    {data.map((CSV, index) => (
                        <article key={index}>
                        {CSV.ITEM || "" ? (
                            <div>
                              <span>{CSV.ITEM}</span>
                              <h1>{CSV.TITLE}</h1>
                              <img src={CSV.IMAGE} alt="Image Item" />
                              <p>{CSV.DESCRIPTION}</p><span>{CSV.PRICE}</span>
                              <a href={CSV.URL}>Ir al ítem</a>
                            </div>
                        ): null}
                        </article>
                    ))}
                </>
            )
        }
        `
      }</Pre>
      <p className="list-css-span">
        Este es un ejemplo básico para poder utilizar el componente de manera
        adecuada, incluye una ternaria para verificar si el item existe, hay
        otras lógicas para renderizar de acuerdo a sus preferencias, pueden usar
        el operador<span>&&</span>:
      </p>
      <Pre lang="javascript">{
        /*javascript */ `
        {CSV.ITEM && (
            <div>
              <span>{CSV.ITEM}</span>
              <h1>{CSV.TITLE}</h1>
              <img src={CSV.IMAGE} alt="Image Item" />
              <p>{CSV.DESCRIPTION}</p>
              <span>{CSV.PRICE}</span>
              <a href={CSV.URL}>Ir al ítem</a>
            </div>
          )}
        `
      }</Pre>
    </>
  );
};

export default GoogleSheetsExample2;
