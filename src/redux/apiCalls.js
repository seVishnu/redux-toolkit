// import axios from 'axios';
// import { updateStart, updateSuccess, updateError} from './features/userSlice'

// export const updateUser = async (user, dispatch) => {
//     dispatch(updateStart());
//     try {
//         const res = await axios.post('http://localhost:8800/api/users/125/update', user);
//         dispatch(updateSuccess(res.data));
//     } catch (error) {
//         dispatch(updateError());
//     }
// }