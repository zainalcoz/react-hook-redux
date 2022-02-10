import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak, deleteKontak, detailKontak } from '../../actions/kontakAction';

function ListKontak() {

    const {
        getListKontakLoading,
        getListKontakData,
        getListKontakError,
        deleteKontakData,
    } = useSelector((state) => state.KontakReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListKontak());
    }, [dispatch])

    useEffect(() => {
        if (deleteKontakData) {
            dispatch(getListKontak());
        }
    }, [deleteKontakData, dispatch])
    
    return (
        <div>
            <h4>List Kontak</h4>
            { getListKontakData ? (
                getListKontakData.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} - {kontak.hp} - <button onClick={ () => dispatch(deleteKontak(kontak.id)) }>X</button>
                            <button onClick={ () => dispatch(detailKontak(kontak)) }>Edit</button></p>
                    )
                })
            ) : getListKontakLoading ? (
                <p>Loading . . . </p>
            ) : (
                <p>{ getListKontakError ? getListKontakError : "Data Kosong" }</p>
            )}
        </div>
    )
}

export default ListKontak;
