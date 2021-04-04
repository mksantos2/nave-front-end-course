
import styled from "styled-components";

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, red, purple} from '@material-ui/core/colors';



export const Label = styled.label` 
	font-family: "Roboto";
	padding-top: 20px;
	font-size: 16px;

`;


export const ContainerCreate = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px;
	height: 100px;
  	width: 550px;	


`;


export const ContainerInput = styled.input `
	
	padding: 10px;
	margin: 20px 1em 20px auto;

	

`;


// -------- MATERIAL UI --------

	
	export const EditButton = withStyles({
		root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		lineHeight: 1.5,
		backgroundColor: '#4e9917',
		fontFamily: 'Roboto',
		'&:hover': {
		  backgroundColor: 'green',
		  borderColor: '#0062cc',
		  boxShadow: 'none',
		},
		'&:active': {
		  boxShadow: 'none',
		  backgroundColor: '#0062cc',
		  borderColor: '#005cbf',
		},
		'&:focus': {
		  boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
		},
	})(Button);

	export const DeleteButton = withStyles({
		root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		lineHeight: 1.5,
		backgroundColor: '#d1352a',
		fontFamily: 'Roboto',
		'&:hover': {
		  backgroundColor: '#9c231a',
		  borderColor: '#0062cc',
		  boxShadow: 'none',
		},
		'&:active': {
		},
		'&:focus': {
		},
		},
	})(Button);


	export const NeutralButton = withStyles({
		root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		lineHeight: 1.5,
		backgroundColor: '#bab7b6',
		fontFamily: 'Roboto',
		'&:hover': {
		  backgroundColor: 'gray',
		  borderColor: '#0062cc',
		  boxShadow: 'none',
		},
		'&:active': {
		  boxShadow: 'none',
		  backgroundColor: '#0062cc',
		  borderColor: '#005cbf',
		},
		'&:focus': {
		  boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
		},
	})(Button);



  // -------- -------- -------- --------
