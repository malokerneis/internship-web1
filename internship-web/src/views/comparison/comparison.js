import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import  DateTimePicker from  '@material-ui/pickers/DateTimePicker';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import { bugs, website, server } from "variables/general.js";
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import SuccessTitle from "components/Typography/SuccessTitle.js";
import PrimaryTitle from "components/Typography/PrimaryTitle.js";
import InfoTitle from "components/Typography/InfoTitle.js";
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// view
import Home from "views/home/home.js";

const useStyles = makeStyles(styles);
// visual of the slider remuneration
const RemunerationSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  active: {},
  valueLabel: {
      left: 'calc(-50% + 12px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
  },
  markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
  },
})(Slider);

export default function Dashboard() {


  const classes = useStyles();
//manage the value of remote
  const [value, setValue] = React.useState('remove');
//manage the value of industry
  const [state, setState] = React.useState({
      industry: '',
  });
//manages the change of the remote value
  const handleChangeRemote = (event) => {
      setValue(event.target.value);
  };
//manages the change of the Industry value
  const handleChangeIndustry = (event) => {
    const name = event.target.name;
    setState({
        ...state,
        [name]: event.target.value,
    });
  };
  return (
    <div>
        <Table
            tableHeaderColor="info"
            tableHead={[
                'Name ',
                'email ',
                'service',
                'remuneration',
                'remote',
                'date',
                'Industry',
                'Qualification',
                'Experience',
                'Certificates',
                'Systems',
                '',
                ''
            ]}
            tableData={[
                // score row
                [
                    "",
                    "",
                    <TextField id="service0" label="service score" />,
                    <TextField id="remuneration" label="remuneration score" />,
                    <TextField id="remote" label="remote score" />,
                    <TextField id="date" label="date score" />,
                    <TextField id="industry" label="industry score" />,
                    <TextField id="qualification" label="qualification score" />,
                    <TextField id="experience" label="experience score" />,
                    <TextField id="certificates" label="certificates score" />,
                    <TextField id="systems" label="systems score" />],
                // add row
                [
                    "",
                    "",
                    <TextField id="service" label="service" />,
                    <RemunerationSlider
                        min ={0}
                        max={10000}
                        step={100}
                        defaultValue={[2000, 6000]}
                        valueLabelDisplay="on"
                        />,
                    <RadioGroup aria-label="remove" name="remove1" value={value} onChange={handleChangeRemote}>
                        <FormControlLabel value="remove" control={<Radio color="primary" />} label="Remove" />
                        <FormControlLabel value="location" control={<Radio color="primary" />} label="Location" />
                        <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                    </RadioGroup>,
                    "",
                    <Select native value={state.industry} onChange={handleChangeIndustry} inputProps={{ name: 'industry', id: 'industry-native-simple', }} >
                        <option aria-label="None" value="" />
                        <option value="solar">Solar</option>
                        <option value="oil and gas">Oil and gas</option>
                        <option value="water">Water</option>
                    </Select>
                    /*<DateTimePicker variant="inline" format="MM/dd/yyyy" margin="normal" id="date-picker-inline" label="Date picker inline" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date'} />*/
                ],
                // company row
                [
                    <Primary>oaktree</Primary>,
                    <Primary> oaktree@gmail.com </Primary>,
                    <Primary> financial manager </Primary>,
                    <Primary>$9.5k per/mth</Primary>,
                    <Primary>no</Primary>,
                    <Primary>july - december</Primary>,
                    <Primary>oil and gas</Primary>,
                    <Primary>financial master </Primary>,
                    <Primary>
                        Manage the accounting and operations of the local service company set up to provide administration of the Singapore platform
                        Work closely with and oversee the work carried out by external service providers who will complete the local accounting, legal, tax advisory and compliance and company secretarial work on our Singapore platform and across the APAC region
                        Assist with the setting up of new investment structures for any new deals ensuring that they are operational in advance of deal completion and with cash repatriation during the life of investment and upon exit
                    </Primary>,
                    <Primary></Primary>,
                    <Primary></Primary>,
                    <Button justIcon round color="info"><Add /></Button>
                ],
                // contractor row
                [
                    <Info>Vasanthi Kasinathan </Info>,
                    <Info> office@fundspartnership.com </Info>,
                    <Info> Fund Controller </Info>,
                    <Info> $9k per/mth </Info>,
                    <Info> yes </Info>,
                    <Info> n/a </Info>,
                    <Info> oil and gas</Info>,
                    <Info>
                        • Singapore Accountants Academy
                        ACCA (1997)
                        FCCA (2002)

                          • Institute of Business Studies (1987)
                        LCCI Diploma in Cost Accounting

                          • Methodist Girls Secondary School, Malaysia (1985)
                        GCE ‘O’ Levels </Info>, <Info>
                        Pacific Star Financial Pte Ltd Oct 2010 - Present
                        Fund Controller.
                        Frasers Centrepoint Asset Management (Commercial) Ltd (REIT Manager) Apr 2005 – Mar 2010.
                        International Mezzanine Fund Management Ltd (Fund Management)
                        Finance Manager
                        Period: 2004 – 2005 .
                        Internet Security Systems Pte Ltd (Southeast Asia & India) (Internet Security Provider)
                        Accountant cum HR & Admin Manager
                        Period: 2000 – 2004
                        Tang Cheng Lin & Co (Public Accountant)
                        Payroll & Accounts Executive
                        Period: 1998 - 1999

                        BSN Commercial Bank, Melaka, Malaysia (Bank)
                        Bank Officer
                        Period: 1997 – 1998

                        Matsushita Denshi (S) Pte Ltd (Semi-conductor)
                        Accounts Assistant
                        Period: 1995 - 1997

                        Neptune Orient Lines Ltd (NOL) (Shipping)
                        Assistant Executive
                        Period: 1990 - 1995
                    </Info>,
                    <Info> </Info>,
                    <Info> </Info>,
                    <Button type="button" color="info" href= "Home">See more </Button>,
                    <Button justIcon round color="info"><Remove /></Button>
                ],
                [
                    <Info>Gloria Cheng Ge Fang </Info>,
                    <Info>gefang@singnet.com.sg </Info>,
                    <Info> Fund Finance, tax & Administration</Info>,
                    <Info>$7k per/mth </Info>,
                    <Info> no</Info>,
                    <Info> july 2020 </Info>,
                    <Info> solar</Info>,
                    <Info>
                        Fellow member of Association of Chartered Certified Accountant (ACCA), UK
                        ACCA Worldwide Prize Winner (1993)
                        Chartered Accountant, Singapore
                        Certified Green Belt
                        Awarded by University of Michigan College of Engineering
                    </Info>,
                    <Info>
                        Armstrong Asset management Pte. Ltd.
                        From Aug 2017 to date
                        Nature of the firm:	An independent asset manager specialized in clean energy  sector with investment into clean energy infrastructure assets in South East Asia countries that leave a long term positive impact on society and the natural environment.
                        Position Held: 	Financial Controller (contract) 	Aug’17 to date
                        Job Description:	Fund Finance, tax & Administration
                        Company:		Henderson Global Investors (Singapore) Ltd
                        From Dec’05 to July’15
                        Nature of the firm:	Asia Pacific headquarter of UK / Australia listed Asset Management Company total U$5 billion AUM in Asia including SICAV & hedge funds, private equity funds, real estate funds and approximately US$120 billion AUM worldwide.
                        Position Held: 	Head of Finance, Asia			July’11 to July’15
                        Finance and Admin Manager 		Dec’05 to July’11
                        Job Description:	1. Reporting to Managing Director of Asia Pacific  and dotted line to Head of Group Finance in London, overseeing all accounting and financial / management reporting functions in Asia pacific including Singapore, Hong Kong, China, Australia, Japan and Indian offices.
                 	    2. As Asia Senior Management team (AMT) member, attending regular AMT and board meetings to report financial performance of Asia Pacific region, provide financial input to Asia strategy, evaluate organic and M&A opportunities from finance perspective and participate in all corporate development initiatives in the region.
                 	</Info>,
                 	<Info> </Info>,
                 	<Info> </Info>,
                 	<Button type="button" color="info">See more</Button>,
                 	<Button justIcon round color="info"><Remove /></Button>
                ],
                [
                    <TextField id="score3" label="score" />,
                    <Info>TRISA TAY </Info>,
                    <Info>trisa_tay@yahoo.com</Info>,
                    <Info>ACCOUNTANT </Info>,
                    <Info> $15k per/mth </Info>,
                    <Info> yes</Info>,
                    <Info>n/a </Info>,
                    <Info>solar </Info>,
                    <Info>
                        A Chartered Accountant trained in Big 4 Accountancy firm, with over 20 years of experience as Financial Controller. Expert in financial & regulatory reporting, fiscal management and accounting system development. </Info>, <Info> ZANA CAPITAL PTE LTD                              Aug 2009 to Present
                        (investment and support team of CMIA novated to current company)
                        Financial Controller
                        CMIA CAPITAL PARTNERS PTE LTD          Jan 2007 to Jul 2009
                        Financial Controller
                        Key Responsibilities
                        Leadership
                            • Act as a positive representative for company Finance with business stakeholders.
                            • Investor relations liaison.
                            • Report to CEO and COO.
                        Compliance & Risk Management
                            • Chief Compliance Officer overseeing entire compliance function including AML, Sanctions, Frameworks and Regulatory matters.
                            • Liaise with the governing and licensing authorities: Monetary Authorities of Singapore (“MAS”), the Economic Development Board of Singapore (“EDB), and SPRING Singapore.
                            • Regulatory Reporting to MAS, EDB, SPRING Singapore, IRAS and ACRA.
                            • Supervise investment guidelines monitoring / restriction.
                            • Capital management for regulatory purposes.
                            • Ensure company is kept abreast of relevant regulatory and best practices development.
                            • Provide compliance advice on business initiatives.
                            • Review marketing materials for investment products.
                            • Provide compliance training to improve confidence and competence of employees, and manage ad-hoc compliance related tasks.
                            • Authority in AML/KYC, FATCA, CRS and Dodd-Frank.
                            • AML/KYC checks and reporting, Dodd-Frank, FATCA & CRS  reporting.
                            • Liaison with Rating Agency (Mercer) to ensure the Singapore structured funds meet Singapore regulatory criteria.
                            • Presentation of risk findings and report to the Board of Directors.
                            • Business Continuity Plan documentation, and testing.
                        Operations / Middle office
                            • Deal Support, including legal documentation, corporate secretarial documentation, financial modelling and deal structuring.
                            • Cash Management : prepare and review cash projections.
                            • Capital calls, distributions, co-investments and carry interest computation and accrual.
                            • Manage fund expenses and prepare annual budget.
                            • Manage requests from investors, Investment Team, internal and external stakeholders.
                            • Liaise with fund administrators, fund valuation service provider, brokers, corporate secretaries, legal advisors and bankers.
                            • Fund valuation.
                            • Trade settlements with brokers and prompt filing with the relevant Stock Exchanges (Singapore, Hong Kong, Germany).
                            • SPV management
                        Business Partnering
                            • Financial Controller with full responsibility for the accounting, compliance and operations of the funds and fund management Company (AUM S$250 million).
                            • Contributed to the successful award of Capital Markets Services Licence and Tax Incentive Schemes for the funds and fund manager.
                            • Compliance & Risk Management
                            • Reviews of governance, risk, financial performance for investments.
                            • Directed financial planning and analysis, key reporting processes, forecasting/budgeting, tax, treasury, MIS and administrative functions through a 3-person finance & administration team.
                            • Review and challenge investment valuation, NAV calculations, and carry calculations.
                            • Perform daily cash flow.
                            • Review documents and provide support on investments and divestments of the Funds.
                            • Singapore subject matter expert – Monetary Authority of Singapore (“MAS”) regulations and reporting, IRAS, Goods and Services Tax, ACRA submission etc.
                            • Impact merger and acquisition decisions - Financial due diligence and Financial modeling.
                            • Shared service centre – provide reporting and analysis services to Investments team. Tailor reports to business unit requirements.
                            • Effective interaction with shareholders whilst appreciating their non-financial background.
                    </Info>,
                    <Info> </Info>,
                    <Info> </Info>,
                    <Button type="button" color="info">See more</Button>,
                    <Button justIcon round color="info"><Remove /></Button>
                ],
            ]}
        />
    </div>
  );
}
