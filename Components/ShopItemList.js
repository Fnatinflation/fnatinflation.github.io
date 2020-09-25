import React from 'react';
import Link from 'next/link';

const itemStyle = {
    flex: "0 0 32%",
    height: "200px",
    wordWrap: "break-word",
    padding: "10px",
    borderStyle: 'solid'
}
const container = {
    marginLeft: "10px",
    marginRight: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
}
const textStyle = {
    height: "10%",
    width: "100%",
    textAlign: "left",
    display: "inline-block",
}

const item1 = {
    id: 0,
    name: 'Bag',
    price: '20'
}
const item2 = {
    id: 1,
    name: 'Watch',
    price: '50'
}
const item3 = {
    id: 2,
    name: 'PC',
    price: '100'
}
const item4 = {
    id: 3,
    name: 'Phone',
    price: '80'
}


class ShopItemList extends React.Component {
    render() {
        const data = []

        data.push(item1);
        data.push(item2);
        data.push(item3);
        data.push(item4);



        let columns = [];
        data.map((v, i) => {
            columns.push(
                <Link as={`/items/${v.name}`} href={{ pathname: '/items/[id]',query: { item: JSON.stringify(v) } }}>
                    <div key={i} id="itemDiv" style={itemStyle}>
                        <div style={textStyle}>
                            <h1 style={{ fontSize: "16px" }}>
                                {v.name}
                            </h1>
                        </div>
                        <div style={{ height: "90%", padding: "0px" }}>
                            <p>{v.price}</p>
                        </div>
                    </div>
                </Link >
            )
        })
        {/* Fill the rest of the row with empty space*/ }
        if (columns.length % 3 === 1) {
            columns.push(<div style={itemStyle}></div>)
            columns.push(<div style={itemStyle}></div>)
        } else if (columns.length % 3 == 2) {
            columns.push(<div style={itemStyle}></div>)
        }
        return (
            <div style={container}>
                {columns}
            </div>
        );
    }
}
export default ShopItemList;