import faker from 'faker';
import { randomColor } from './utils';

export default function makeData(count) {
	let data = [];
	let options = [];
	for (let i = 0; i < count; i++) {
		let row = {
			ID: faker.mersenne.rand(),
			classProd: faker.name.classProd(),
			prodInventoryName: faker.name.prodInventoryName(),
			detail: faker.internet.detail(),
			unitCost: Math.floor(20 + Math.random() * 20),
			cost: faker.cost.genre()
		};
		options.push({ label: row.cost, backgroundColor: randomColor() });

		data.push(row);
	}

	let columns = [
		{
			id: 'class',
			label: 'class',
			accessor: 'class',
			minWidth: 100,
			dataType: 'text',
			options: []
		},
		{
			id: 'prodInventoryName',
			label: 'prodInventoryName',
			accessor: 'prodInventoryName',
			minWidth: 100,
			dataType: 'text',
			options: []
		},
		{
			id: 'unitCost',
			label: 'unitCost',
			accessor: 'unitCost',
			width: 80,
			dataType: 'text',
			options: []
		},
		{
			id: 'detail',
			label: 'detail',
			accessor: 'detail',
			width: 300,
			dataType: 'text',
			options: []
		},
		{
			id: 'cost',
			label: 'cost',
			accessor: 'cost',
			dataType: 'select',
			width: 200,
			options: options
		},
		{
			id: 999999,
			width: 20,
			label: '+',
			disableResizing: true,
			dataType: 'null'
		}
	];
	return { columns: columns, data: data, skipReset: false };
}
