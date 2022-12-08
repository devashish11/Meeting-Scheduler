import './index.css';
export default function IconText (props) {
    const { icon, text }=props;
    return(
        <div className='d-flex pt-2 iconText'>
        <i className={icon}></i>
        <p>{text}</p>
        </div>
    )
}