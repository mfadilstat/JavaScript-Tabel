export default class{
    /**
     * @param {HTMLTableElement} root
     */
     
    constructor(root){
        this.root = root;
    }

    /**
    * @param {string[][]} data
    * @param {string[]} headerColumns
    */

    update(headerColumns, data){
        this.clear();
        this.setHeader(headerColumns);
        this.setBody(data);
    }

    clear(){
        this.root.innerHTML = "";
    }
    /**
    * @param {string[]} headerColumns
    */
    setHeader(headerColumns){
        this.root.insertAdjacentHTML("afterbegin", `
        <thead>
            ${ headerColumns.map(text => `<th>${ text }</th>`).join("") }
        </thead>
        `);
    }
    /**
    * @param {string[][]} data
    */
    setBody(data){
        const rowsHTML = data.map(row =>{
            return `
                <tr>
                    ${ row.map(text => `<td>${ text }</td>`).join("")} 
                </tr>
            `;
        });
        
        this.root.insertAdjacentHTML("beforeend", `
            <tbody>
                ${ rowsHTML.join("") }
            </tbody>
        `);
    };

}