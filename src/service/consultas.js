import { db } from '../config/firebaseConfig'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
    writeBatch,
  } from "firebase/firestore/lite";
export default class Consultas {

    constructor(){

    }

    addProduct =   (product) =>{
        return new Promise(async (resolve)=>{
            try {
                const productRef = collection(db, "productos");
                await addDoc(productRef,product)
                return resolve(true);
            }catch(error){
                return resolve(false);
            }
        });
    }

    allProducts = ()=>{
        return new Promise(async (resolve)=>{
            try {
                const productRef = collection(db, "productos");
                const shapshot = await getDocs(productRef);
                const listProduct = shapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
                }))
                return resolve(listProduct);
            }catch(error){
                return resolve([]);
            }
        });
    }

    deleteallProduct = ()=>{
        return new Promise(async (resolve)=>{
            try {
                const batch = writeBatch(db)
                const productRef = collection(db, "productos");
                const shapshot = await getDocs(productRef);
                shapshot.forEach((docSnap) => {
                    batch.delete(docSnap.ref); // Agregar la eliminación de cada documento al batch
                });
                await batch.commit();
                return resolve(true);
            }catch(error){
                return resolve(false);
            }
        });
    }

    deleteProduct =   (product) =>{
        return new Promise(async (resolve)=>{
            try {
                const docRef = doc(db, "productos", product.id);
                await deleteDoc(docRef)
                return resolve(true);
            }catch(error){
                return resolve(false);
            }
        });
    }
}