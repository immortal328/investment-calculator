import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}){

    const resultData = calculateInvestmentResults(input)
    const initialInvestment = 
                            resultData[0].valueEndOfYear
                            - resultData[0].interest
                            - resultData[0].annualInvestment;
    console.log(resultData);
    return(
        <div>
            <table id="result" className="table table-striped-columns">
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Investment Capital</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    resultData.map((data,index)=>{
                        const totalIntrest = data.valueEndOfYear 
                                           - data.annualInvestment * data.year 
                                           - initialInvestment;

                        const totalAmountInvested = data.valueEndOfYear - totalIntrest;
                        return <tr key={index+1}>
                                    <td>{data.year}</td>
                                    <td>{formatter.format(data.valueEndOfYear)}</td>
                                    <td>{formatter.format(data.interest)}</td>
                                    <td>{formatter.format(totalIntrest)}</td>
                                    <td>{totalAmountInvested}</td>
                                </tr>
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}