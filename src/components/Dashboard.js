import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';

import SkeletonProfile from '../skeletons/SkeletonProfile';
import SkeletonArticle from '../skeletons/SkeletonArticle';
import SkeletonModal from '../skeletons/SkeletonModal';

import Header from './dashboard/Header';
import '../css/Dashboard.css';
import '../css/Header.css';

const Dashboard = () => {
    const { referrer } = useParams();
    const [loading, setLoading] = useState(true);
    const [activeContent, setActiveContent] = useState('');

    const contentChoice = (content) => {
        setActiveContent(content);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])
    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <Header loadContent={contentChoice} loader={setLoading} />
            </header>
            <main className="dashboard__main">
                {
                    loading ? (
                        <div className="loading__screen">
                            <SkeletonProfile theme="dark" />
                            <SkeletonArticle theme="dark" />
                            <SkeletonModal theme="dark" />
                        </div>
                    ) : (
                        <section className="content__contain">
                            {
                                activeContent
                            }
                        </section>
                    )
                }
            </main>
        </div>
    )
}

export default Dashboard
