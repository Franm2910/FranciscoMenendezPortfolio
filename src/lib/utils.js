
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

/* Usa tailwind merge para combinar clases sin tener que complicarlo en una linea. 
Con esto en las cosas paso una lista de las clases que quiero se compilen y listo */
export const cn = (...inputs) => {
    return twMerge(
        clsx(inputs)
    )
}