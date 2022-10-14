import React from 'react';
import {CarType} from './../App';

type TopCarsComponentType = {
    topCars: Array<CarType>;
}

export const TopCarsComponent = (props: TopCarsComponentType) => {
    return (
        <>
            <h3>Top Cars</h3>
            <table style={{borderStyle: 'solid'}}>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.topCars.map((car: CarType) => {
                    return (
                        <tr>
                            <td>
                                {car.manufacturer}
                            </td>
                            <td>
                                {car.model}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};
