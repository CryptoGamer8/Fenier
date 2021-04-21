import BarChart from './bar'
import PieChart from './pie'

function Analysis(props) {
    
    return <div>
        <h1>{props.year}</h1>
        <BarChart/>
        <PieChart/>
    </div>
}

export default Analysis;