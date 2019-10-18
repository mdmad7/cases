import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Datepicker } from 'baseui/datepicker'
import { Select } from 'baseui/select'

import TextEditor from '../components/texteditor'

const CreateContainer = styled.div`
  position: relative;
  @media screen and (max-width: 880px) {
    /* flex-direction: column-reverse; */
  }
`
const PageBar = styled.div`
  height: 85px;
  width: 100%;
  margin-bottom: 8px;
  input {
    height: 35px;
    width: inherit;
    font-size: 20px;
    background-color: transparent !important;
    border: none;
    outline: none;
  }

  div {
    background-color: transparent !important;
  }
`

const Toolbar = styled.div`
  background-color: white;
  padding: 5px;
  position: fixed;
  top: 94px;
  right: 10px;
  width: 320px;
  height: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 1px 2px rgba(0, 0, 0, 0.14);
`
const MainArea = styled.div`
  margin-right: 360px;
`

const TextEditorWrapper = styled.div`
  /* margin-top: calc(85px + 8px + 14px); */
  background-color: white;
  & > div {
    height: calc(100vh - 140px);
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .quill {
    height: inherit;
    padding-bottom: 65px;
  }

  .ql-container {
    overflow: hidden;
    border: none;
  }
  .ql-toolbar {
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 20px rgba(0, 0, 0, 0.13);
  }
  .ql-editor {
    font-size: 16px;
    padding-bottom: 0;
  }
`
const Create = () => {
  const titleEl = useRef(null)
  const [caseTitle, setCaseTitle] = useState('OWUSU AND OTHERS v. AMOA-OBENG')
  const [caseJudge, setCaseJudge] = useState('')
  const [caseCode, setCaseCode] = useState('GLR 293-297')
  const [court, setCourt] = useState({ label: 'High Court', id: 'High Court' })
  const [city, setCity] = useState({ label: 'Kumasi', id: 'kumasi' })
  const [tags, setTags] = useState()

  const [singleDate, setSingleDate] = useState(null)

  useEffect(() => {
    titleEl.current.focus()
  }, [])

  return (
    <CreateContainer>
      <PageBar>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            style={{ width: '65%' }}
            ref={titleEl}
            value={caseTitle}
            placeholder='Enter case title'
            onChange={e => setCaseTitle(e.target.value)}
          />
          <input
            value={caseJudge}
            style={{ flex: 1, fontSize: '16px' }}
            placeholder='Enter case judge'
            onChange={e => setCaseJudge(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            style={{ width: '62%' }}
            value={caseCode}
            placeholder='Enter case code'
            onChange={e => setCaseCode(e.target.value)}
          />
          <Datepicker
            placeholder='Enter case date'
            style={{ flex: 1 }}
            value={singleDate}
            onChange={({ date }) => setSingleDate(date)}
          />
        </div>
      </PageBar>
      <Toolbar>
        <div style={{ marginBottom: '10px' }}>
          <Select
            creatable
            options={[
              { label: 'High Court', id: 'High Court' },
              { label: 'Fast track', id: 'Fast track' }
            ]}
            value={court}
            placeholder='Select court'
            onChange={params => setCourt(params.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Select
            creatable
            options={[
              { label: 'Kumasi', id: 'kumasi' },
              { label: 'Accra', id: 'accra' },
              { label: 'Takoradi', id: 'takoradi' }
            ]}
            value={city}
            placeholder='Select city'
            onChange={params => setCity(params.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Select
            creatable
            options={[
              { label: 'Criminal', id: 'Criminal' },
              { label: 'Civil', id: 'Civil' }
            ]}
            value={tags}
            multi
            placeholder='Select tags'
            onChange={params => setTags(params.value)}
          />
        </div>
      </Toolbar>

      <MainArea>
        <TextEditorWrapper>
          <TextEditor />
        </TextEditorWrapper>
      </MainArea>
    </CreateContainer>
  )
}

export default Create
