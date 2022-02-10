import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction';

function AddKontak() {
    const [nama, setNama] = useState("");
    const [hp, setHp] = useState("");
    const [id, setId] = useState("");
    const { addKontakData, detailKontakData, updateKontakData } = useSelector((state) => state.KontakReducer);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nama !== '' && hp !== '') {
            if (id) {
                dispatch(updateKontak({ id: id, nama: nama, hp: hp }))
            } else {
                dispatch(addKontak({ nama: nama, hp: hp }))
            } 
        }
    } 

    useEffect(() => {
        if (addKontakData) {
            dispatch(getListKontak());
            setNama('');
            setHp('');
        }
    }, [addKontakData, dispatch])

    useEffect(() => {
        if (detailKontakData) {
            setId(detailKontakData.id);
            setNama(detailKontakData.nama);
            setHp(detailKontakData.hp);
        }
    }, [detailKontakData, dispatch])

    useEffect(() => {
        if (updateKontakData) {
            dispatch(getListKontak());
            setId('');
            setNama('');
            setHp('');
        }
    }, [updateKontakData, dispatch])

    return (
        <div>
            <h4>{ id ? 'Edit Kontak' : 'Update Kontak'}</h4>
            <form>
                <input type='text' name='nama' placeholder='Nama ...' value={nama}
                onChange={(event) => setNama(event.target.value)} />
                <input type='text' name='hp' placeholder='HP ...' value={hp}
                onChange={(event) => setHp(event.target.value)} />
                <button onClick={(event) => handleSubmit(event)}>Submit</button>
            </form>
        </div>
    )
}

export default AddKontak