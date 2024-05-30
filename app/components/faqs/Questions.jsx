import Image from 'next/image'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey, orange } from '@mui/material/colors';
export default function Questions() {
  return (
    <div className='my-container grid md:grid-cols-2 py-12 gap-10'>
      <div className=''>
        <h1 className='heading text-gradient '>Still Have Questions?</h1>
        <p className='para py-6'>Check out our FAQ.</p>
        <div className='flex justify-center lg:justify-start '><Image src="/clothone.jpg" alt='clothimg' width={494} height={200}/></div>
      </div>
      <div className='two'>
      <div className='flex flex-col gap-5'>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontSize:"18px",color:grey[700]}}>Are You A Broker Or A Grader?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are graders who bring the entire purchased product to our warehouse in California. The final decision is made by us and we accommodate to your timing and needs immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontSize:"18px",color:grey[700]}}>Who Takes Care Of The Freight?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We arrange all our freights whether be for our suppliers or our end buyers. We guarantee to quote the best rate we receive from the shipping company. As a large volume shipper we can often obtain lower rates to most foreign ports of destination.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontSize:"18px",color:grey[700]}}>Can You Provide Insurance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we can supply insurance against complete loss and non-delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontSize:"18px",color:grey[700]}}>Can We Come In To Inspect Your Goods And Our Orders?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes we believe that everyone is entitled to monitor their goods in process. We believe in trust and understand that this would be the buyer’s best interest, which will strengthen our relationship.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <Typography sx={{fontSize:"18px",color:grey[700]}}>Can You Send Us The Price List?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please contact us with your requirements and we will be happy to quote you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontSize:"18px",color:grey[700]}}>How Long Will It Take To Recieve My Container?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The length of time to prepare a container varies with the composition. Upon receipt of your order we can give you a time table. Most containers take anywhere between 10-14 business days to prepare.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{paddingY:"10px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color:orange[800]}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <Typography sx={{fontSize:"18px",color:grey[700]}}>What Are Your Payment Terms?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We prepay our suppliers for all our loads. Consequently we require 100% advance payment before shipping out any load.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      
    </div>
      </div>
    </div>
  )
}
