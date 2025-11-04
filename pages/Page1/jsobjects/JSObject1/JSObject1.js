export default {

	table_prodotti_data: [
		{id:0, desc:"sdfa", unit_price:5, stock:3, q:0, f:"A"},
		{id:1, desc:"kjhdfg", unit_price:10, stock:3, q:0, f:"B"},
		{id:2, desc:"uiotry", unit_price:5, stock:1, q:0, f:"A"},
	],
	
	table_carrello_data:[],
	selected_products:{},

	descrizione: `<div>
  <p><strong>Le foglie</strong> si distinguono principalmente in base alla forma e alla composizione.</p>
  <p><strong>Foglie semplici:</strong> hanno una sola lamina fogliare, come quelle del melo.</p>
  <p><strong>Foglie composte:</strong> sono divise in più foglioline, come quelle del trifoglio.</p>
  <p><em>In base ai margini</em>, possono essere intere, dentate o lobate.</p>
  <p><em>In base alla nervatura</em>, si classificano in penninervie, palmato-nervie o parallelinervie.</p>
  <p><strong>Altre varianti</strong> includono foglie aghiformi (nelle conifere) e foglie squamiformi.</p>
  <p><em>Ogni tipo ha adattamenti specifici</em> per luce, clima e habitat.</p>
</div>`,

	on_submit_quantity_field() {
		console.log(TableProdotti.updatedRows);
		let updated_row = TableProdotti.updatedRow;
		
		console.log(TableProdotti.updatedRow); 

		if (updated_row.q > 0){
			this.selected_products[TableProdotti.updatedRow.id] = TableProdotti.updatedRow;
		}
		else{
			if (updated_row.id in this.selected_products){
				delete this.selected_products[updated_row.id]
			}
		}
		console.log(this.selected_products);
		
	},
	
	on_click_button_save(){
		this.table_prodotti_data[TableProdotti.triggeredRowIndex].q = TableProdotti.updatedRow.q;
		this.selected_products[TableProdotti.updatedRow.id] = TableProdotti.updatedRow;
		console.log(this.selected_products);
	},
	
	on_click_button_add_remove(){
		if (TableProdotti.triggeredRow.q === 0){
			this.table_prodotti_data[TableProdotti.triggeredRowIndex].q = 1;
			this.selected_products[TableProdotti.triggeredRow.id] = this.table_prodotti_data[TableProdotti.triggeredRowIndex];
		}
		else{
			this.table_prodotti_data[TableProdotti.triggeredRowIndex].q = 0;
			delete this.selected_products[this.table_prodotti_data[TableProdotti.triggeredRowIndex].id];
		}
		console.log(this.table_prodotti_data);
		console.log(this.selected_products);
	},
}