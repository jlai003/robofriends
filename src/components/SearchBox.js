import React from 'react';

const SearchBox = ({searchfield, searchChange})=> {
	return (
		<div className='pa2'>

		<input className='pa3 ba b--green bg-lightest-blue' 
		type='Filter' 
		onChange={searchChange}
		placeholder='Filter robots...'
		/>
		</div>
		);
}
export default SearchBox;