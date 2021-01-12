import React, { useRef } from 'react'
import { getContacts, getUsCountries } from '../apis'
import MyVerticallyCenteredModal from '../components/modal'
import debounce from 'lodash.debounce'
import { connect } from 'react-redux';
import { setCountry, fetchContacts } from '../redux/actions/contacts'
import { useSelector, useDispatch } from 'react-redux'

const AllCountries = ({ history }) => {
    const checker = useSelector(state => state.contacts.checker)
    const dispatch = useDispatch()
    console.log('checker', checker)
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ block: "center" })
    const [firstModal] = React.useState(true);
    const [countries, setAllCountries] = React.useState({});
    const [nextPage, setnextPage] = React.useState(1);
    const [companyId] = React.useState(171);
    const [countryId] = React.useState(226);
    const [uscountries, setUsCountries] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        checker === 'All' ? getAllCountries() : usCountries()
    }, [nextPage]);

    const getAllCountries = async () => {
        checker === 'US' && dispatch(fetchContacts([]))
        checker === 'US' && setnextPage(1)
        dispatch(setCountry('All'))
        setLoading(true)
        try {
            const companyId = 171
            const response = await getContacts(companyId, nextPage)
            const data = response?.data?.contacts
            setAllCountries(Object.assign({}, countries, data))
            dispatch(fetchContacts(Object.assign({}, countries, data)))
            setLoading(false)
        }
        catch (error) {
            setLoading(false)
        }
    }
    const usCountries = async () => {
        checker === 'All' && dispatch(fetchContacts([]))
        checker === 'All' && setnextPage(1)
        dispatch(setCountry('US'))
        setLoading(true)
        try {
            const companyId = 171
            const countryId = 226
            const response = await getUsCountries(companyId, countryId, nextPage)
            const uscountries = response?.data?.contacts
            setUsCountries(uscountries)
            dispatch(fetchContacts(uscountries))
            setLoading(false)
        }
        catch (error) {
            setLoading(false)
        }
    }
    const updateQuery = () => {
        setnextPage(nextPage + 1)
    };

    const handleScroll = React.useCallback(
        debounce(e => updateQuery(e), 1000, {
            leading: false,
            trailing: true
        }),
        [nextPage]
    );
    const handleScrollFrame = ({ top }) => {
        if (top > 0.99) {
            handleScroll(top);
            executeScroll()
        }
    };

    return (
        <MyVerticallyCenteredModal
            show={firstModal}
            onHide={() => history.goBack()}
            heading={'Modal 1'}
            uscountries={uscountries}
            data={countries}
            getUsCountries={() => usCountries()}
            getcountries={() => getAllCountries()}
            loading={loading}
            handleScrollFrame={handleScrollFrame}
            refProp={myRef}
        />
    )
}


export default AllCountries