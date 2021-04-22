import BarChart from './bar'
import PieChart from './pie'

function Analysis(props) {
    const year = props.year
    return <div>
        <h1>{year}</h1>
        <BarChart year={year}/>
        <PieChart/>
    </div>
}

export default Analysis;