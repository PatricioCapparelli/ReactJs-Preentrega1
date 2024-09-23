import ItemButton from "../ItemButton/ItemButton";

const RemoveAddButton = ({ children, name, lastname, eventHandler}) => {
    

    return (
        <div className="container-buttons__remove-add">
        <ItemButton name={name} className='footer-item-button'/>
        {children}
        <ItemButton eventHandler={eventHandler} lastname={lastname} className='footer-item-button'/>
        </div>
    )
}

export default RemoveAddButton;