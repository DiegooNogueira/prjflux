import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActions from '../../store/modules/Language/actions';
import './index.css';

function CousersList() {
    const courses = useSelector(state => state.languages.data);
    const dispatch = useDispatch();
    function addCourse() {
        const name = prompt('Informe o nome da linguagem')
        dispatch(UserActions.addLanguage(name));
    }
    function teste() {
        dispatch(UserActions.teste());
    }
    return (
        <>
            <div className='title'>
                <h1>Lista de Linguagens</h1></div>
            <div className='content'>
                 <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <button type='button' onClick={teste}>Adicionar Linguagem</button>
            </div>
           
        </>
    );
}

export default CousersList;