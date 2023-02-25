import { StyledStatisticsPage } from "../styled-components/styledStatisticsPage";

const StatisticsPage = () => {
  return (
    <StyledStatisticsPage>
      <iframe
        title="Reporte inicial propiedades"
        width="900"
        height="612"
        src="https://app.powerbi.com/view?r=eyJrIjoiOTI5NDI1ZjItMGVjZi00OGU3LTk3ZGUtNTgwMThlNzkzYmU2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection"
        allowFullScreen="true"
      ></iframe>
    </StyledStatisticsPage>
  );
};

export default StatisticsPage;
