import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, PaginationState, getPaginationRowModel, useReactTable} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Site = (data) => {
  const {data: siteData} = data
  const fakeData = siteData.map((row) =>
  {
    if(!row.city) {
      row.city = "台北市"
    } 
    return row   
  })
  // 兩筆假資料
  fakeData.push({city: "新竹市", sarea: "新竹科學園區", sna: "測試用資料", sbi: 1, bemp: 1})
  fakeData.push({city: "桃園市", sarea: "桃園區", sna: "測試用資料", sbi: 1, bemp: 1})

  const allcityData = fakeData.map((row) => row.city)
  const cityFilter = allcityData.filter((item, index) => allcityData.indexOf(item) === index)
  // console.log("cityFilter:", cityFilter);

  const allSareaData = fakeData.map((row) => row.sarea)
  const sareaFilter = allSareaData.filter((item, index) => allSareaData.indexOf(item) === index)
  // console.log("sareaFilter:", sareaFilter);
  
  const [tableData, setTableData] = useState(fakeData)
  const [intCity, setIntCity] = useState("")
  const [intSearch, setIntSearch] = useState("")   

  const [listCity, setListCity] = useState(cityFilter)
  const [listSarea, setListSarea] = useState(sareaFilter)

  const [intSareaChecked, setIntSareaChecked] = useState(listSarea)  

  useEffect(() => {  
    if(intCity || intSareaChecked || intSearch) {
      let data = fakeData
      
      if(intCity) {
        data = data.filter((item) => item.city === intCity)              
      }
      
      if(intSareaChecked) {
        data = data.filter((item) => intSareaChecked.includes(item.sarea))
      }

      if(intSearch) {
        data = data.filter((item) => item.sna.includes(intSearch))             
      }

      const time = setTimeout(()=>{        
        setTableData(data)
        clearTimeout(time)
      }, 1000) 
    }        
  }, [intCity, intSareaChecked, intSearch])

  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('city', {
      header: () => '縣市',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('sarea', { 
      header: () => '區域',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('sna', {
      header: () => '站點名稱',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('sbi', {
      header: () => "可借車輛",
      cell: info => <span className='text-[#BED23E] font-bold'>{info.getValue()}</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('bemp', {
      header: () => "可還空位",
      cell: info => <span className='text-[#BED23E] font-bold'>{info.getValue()}</span>,
      footer: info => info.column.id,
    }),  
  ]

  const handleCheckAllChange = (e) => {
    if (e.target.checked) {
      const allSarea = listSarea.map((sareaName) => sareaName);
      setIntSareaChecked(allSarea);
    } else {
      setIntSareaChecked([]);
    }
  }

  const handleSareaChange = (e, sareaName) => {
    if(e.target.checked) {
      setIntSareaChecked([...intSareaChecked, sareaName])
    }else {
      setIntSareaChecked(intSareaChecked.filter((item) => item !== sareaName))
    }
  }

  const table = useReactTable({
    data: tableData,
    columns,    
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className='mt-24 mx-32 max-md:mx-12 max-sm:mx-8'> 

      <h1 className='mb-6 text-2xl text-[#BED23E] font-bold tracking-widest'>站點資訊</h1>
      <div className='flex flex-row max-md:flex-col-reverse ml-4'>
        <div>
          <select className='bg-gray-100 w-24 max-md:w-full h-8 max-md:h-12 px-4 rounded-lg outline-none max-md:mt-2' name="city" id="" value={intCity} placeholder='選擇縣市' onChange={(e) => setIntCity(e.target.value)}>
            {listCity.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
       
        <div className='flex flex-row items-center ml-6 max-md:ml-0 relative'>
          <input type="text" name="search" className='w-48 max-md:w-full h-8 max-md:h-12 bg-gray-100 rounded-lg text-sm px-4 md outline-none' placeholder='搜尋站點' value={intSearch} onChange={(e) => setIntSearch(e.target.value)} />
          <FontAwesomeIcon className='absolute w-4 h-4 right-0 mr-4 text-gray-300' icon={faSearch}></FontAwesomeIcon>
        </div>           
      </div>
      
      <div className='flex flex-auto flex-wrap w-[70%] max-md:w-full my-4'>
        <div className='w-full mx-4 my-2'>        
          <input type="checkbox" checked={intSareaChecked.length === listSarea.length} onChange={(e) => {handleCheckAllChange(e)}}/>
          <label className='ml-2 mr-2'>全部勾選</label> 
        </div>
          {
            listSarea.map((sareaName, index) => {              
              return  (
                <div className='mx-4 my-2'>
                  <input type="checkbox" name="sarea" checked={intSareaChecked.includes(sareaName)} onChange={(e) => {handleSareaChange(e, sareaName)}} />
                  <label className='ml-2 mr-2'>{sareaName}</label>               
                </div>
              )
            }
                        
            )            
          }          
        </div>    
      

      <div className="w-full my-12 p-2">
        <div className='max-lg:overflow-hidden max-lg:overflow-x-scroll'>
          <table className='w-full text-center min-w-[768px] '>
            <thead className='bg-[#B5CC22] text-green-50'>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className='h-14' key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      <div className={header.column.getCanSort() ? "cursor-pointer select-none" : ''} onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr className='h-20' key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>       
          </table>
        </div>
        

        <div className="pagination flex w-full px-5 justify-between relative mt-4 select-none text-[#7A862E] max-md:text-sm">
          <div>
            {"顯示"}
            <select
              className='bg-gray-50 outline-none select-none'
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 20, 30, 40, 50].map(pageSize => (                
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            {"筆"}
          </div>
          <div>
            <button className='text-gray-500 px-2 py-1 rounded-md cursor-pointer' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              <FontAwesomeIcon icon={faAngleLeft} className='w-4 h-4'/>
            </button>
            {[...Array(table.getPageCount())].map((x, i) => 
              i <= table.getState().pagination.pageIndex + 3 &&  i >= table.getState().pagination.pageIndex - 3 ? <button key={i} className='rounded-full w-8 h-8 mx-2 max-md:mx-0 text-indigo-400 hover:bg-indigo-400 hover:text-white hover:transition hover:duration-300' onClick={()=> table.setPageIndex(i)}> {i+1} </button> : "" 
            )}
             <button className='text-gray-500 px-2 max-md:px-0 rounded-md cursor-pointer' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              <FontAwesomeIcon icon={faAngleRight} className='w-4 h-4'/>
            </button>
          </div>        
          <span>
            {`第 ${table.getState().pagination.pageIndex + 1} 頁 共 ${table.getPageCount()} 頁`}            
          </span>          
        </div>
      </div>
    </div>
    
  );
};

export default Site;