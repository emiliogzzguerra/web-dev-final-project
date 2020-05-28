import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Switch } from 'antd'
import { useTranslation } from 'react-i18next';

const StyledSwitch = styled(Switch)`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export default function LanguageSwitch() {
    const [language, setLanguage] = useState('es');
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

    const handleChange = () => {
        if (language === 'es') {
            setLanguage('en')
        } else {
            setLanguage('es')
        }
    }

    return (
        <StyledSwitch checkedChildren="ES" unCheckedChildren="EN" onChange={handleChange} defaultChecked />
    )
}
