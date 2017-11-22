import React from 'react';
import { expect } from 'chai';

import { shallow } from 'enzyme';

import SignatureListItem from '../../src/components/signature-list-item';

describe('<SignatureListItem />', () => {

	const user = {
		city: 'Nottingham',
		state: 'England',
		name: 'Ada Lovelace',
	}
	const created_date = Number(new Date(1836, 11, 10))

	it('is a li.signer', () => {
		const context = shallow(<SignatureListItem user={user} created_date={created_date} number={1000} />);
		expect(context.name()).to.equal('li')
		expect(context.is('.signer')).to.be.true
	});

	it('renders the correct number', () => {
		const context = shallow(<SignatureListItem user={user} created_date={created_date} number={1000} />);
		expect(context.find('.signer-number').text())
			.to.equal('1000');
	});

	it('renders name in bold', () => {
		const context = shallow(<SignatureListItem user={user} created_date={created_date} number={1000} />);
		expect(context.find('b').text())
			.to.equal(user.name);
	});

	it('renders readable text with city and state', () => {
		const context = shallow(<SignatureListItem user={user} created_date={created_date} number={1000} />);
		expect(context.text())
			.to.equal('1000 Ada Lovelace from Nottingham, England signed this petition on Dec 10, 1836.')
	});

	it('renders readable text with only state', () => {
		const noCity = {
			state: 'England',
			name: 'Ada Lovelace',
		}
		const context = shallow(<SignatureListItem user={noCity} created_date={created_date} number={1000} />);
		expect(context.text())
			.to.equal('1000 Ada Lovelace from England signed this petition on Dec 10, 1836.')
	});
});