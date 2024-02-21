import { InfoIcon } from 'lucide-react';
import { Pre } from './Pre';

export const GoogleSheetsExample2 = () => {
  return (
    <>
      <div className="border-l-4 border-blue-500 px-1 bg-opacity-[0.6] p-3 pl-5 text-blue-500 font-semibold">
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
