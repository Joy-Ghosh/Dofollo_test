import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import docsData from '../../data/docs.json';

const DocsIndex: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the first doc in the first category
        if (docsData.categories.length > 0 && docsData.categories[0].items.length > 0) {
            const firstDocId = docsData.categories[0].items[0].id;
            navigate(`/docs/${firstDocId}`, { replace: true });
        }
    }, [navigate]);

    return null; // Or a loading spinner
};

export default DocsIndex;
