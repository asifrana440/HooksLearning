import { useState } from 'react';
import './Index.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (inputData.trim() !== '') {
            setItems([...items, inputData]);
            setInputData('');
        }
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className="main-div">
            <div className="child-dev">
                <figure>
                    <img src="path_to_your_image" alt="Todo logo" />
                    <figcaption>Todo Array Add And Remove this</figcaption>
                </figure>
                <div className="add-item">
                    <input
                        type="text"
                        placeholder="write Add Item"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faPlus} className="add-btn" title="Add-item" onClick={addItem} />
                </div>
                <div className="show">
                    {items.map((item, index) => (
                        <div key={index} className="showItem">
                            <h3>{item}</h3>
                            <FontAwesomeIcon icon={faTrashAlt} className="add-btn" title="Delete-item" onClick={() => removeItem(index)} />
                        </div>
                    ))}
                </div>
                <div className="clear">
                    <button>
                        <span className="btn effect04" data-sm-link-text="Remove All">Check List</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
