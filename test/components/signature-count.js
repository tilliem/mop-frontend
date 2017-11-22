import React from 'react';
import { expect } from 'chai';

import { shallow } from 'enzyme';

import SignatureCount from '../../src/components/signature-count';

describe('<SignatureCount />', () => {
	it('renders nothing if current is undefined', () => {
		const context = shallow(<SignatureCount />);
		expect(context.isEmptyRender()).to.be.true;
	});

	it('formats numbers', () => {
		const context = shallow(<SignatureCount current={1000} goal={1000000}/>);
		expect(context.find('.progress-current strong').text()).to.equal('1,000');
		expect(context.find('.progress-goal strong').text()).to.equal('1,000,000');
	});

	it('calculates bar width', () => {
		const context = shallow(<SignatureCount current={1000} goal={1000000}/>);
		expect(context.find('.bar').prop('style').width).to.equal('0.10%');
	});

	it('maxes bar width at 100%', () => {
		const context = shallow(<SignatureCount current={1000000} goal={1000}/>);
		expect(context.find('.bar').prop('style').width).to.equal('100.00%');
	});

	it('does not error if goal is 0', () => {
		const context = shallow(<SignatureCount current={1000000} goal={0}/>);
		expect(context.find('.bar').prop('style').width).to.equal('0%');
	});		
});