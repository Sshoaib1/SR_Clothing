import { pageNumbersArray } from "../Utils/Utils";


function Pagination(props) {
    // if(props.totalPages === 1)
    //     return null;

    return (
        <nav aria-label="Page navigation example" style={{justifyContent:"center"}}>
            <ul className="pagination">
            <li className={props.page === 1 ? "page-item disabled" : "page-item"}>
                    <a 
                        className="page-link"
                        onClick={() => props.onChangeCat(props.page - 1)}>
                        Previous
                    </a>
                </li>
                {pageNumbersArray(props.totalPages).map(v => {
                    return (
                        <li key={v} className= {v === props.page ? "page-item active" : "page-item"}>
                            <a 
                                className="page-link"                            
                                onClick={() => props.onChangeCat(v)}
                            >
                                {v}
                            </a>
                        </li>
                    )
                }
                )}
                <li className={props.page ===  props.totalPages? "page-item disabled" : "page-item"}>
                    <a 
                        className="page-link" 
                        onClick={() => props.onChangeCat(props.page + 1)}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;