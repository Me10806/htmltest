import React from 'react';

type ArticleProps = {
    title: string;
    content: string;
    fontsize:number;
    textiti:any;
    titleleftpt:number;
    titletoppt:number;
    contentleftpt:number;
    contenttoppt:number;
};

const Article = (props:ArticleProps) => {
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };

    return(
        <div style={{fontSize: props.fontsize + 'px',textAlign:props.textiti}}>
            <h2 style={{ marginTop: props.titletoppt + 'px', marginLeft: props.titleleftpt + 'px'}}>{props.title}</h2>
            <p style={{ marginTop: props.contenttoppt + 'px', marginLeft: props.contentleftpt + 'px'}}>{props.content}</p>
        </div>

    )
}

export default Article;


