import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      basicSalary: '',
      travel: '',
      health: '',
      noPay: '',
      otherDeductions: '',
      sum_of_EPForETF_allowed_earnings: '',
      totalEarnings: '',
      grossDeductions: '',
      grossEarnings: '',
      taxpercentage: '',
      constant: '',
      totalEarningsforEPF: '',
      grossSalaryforEPF: '',
      employeeEPF8: '',
      employerEPF12: '',
      employerETF3: '',
      APIT: '',
      netSalary: '',
      costtocompany: '',
    };

    this.handlebasicSalary = this.handlebasicSalary.bind(this);
    this.handletravel = this.handletravel.bind(this);
    this.handlehealth = this.handlehealth.bind(this);
    this.handlenoPay = this.handlenoPay.bind(this);
    this.handleotherDeductions = this.handleotherDeductions.bind(this);
    this.handlesum_of_EPForETF_allowed_earnings = this.handlesum_of_EPForETF_allowed_earnings.bind(this);
    this.handletaxpercentage = this.handletaxpercentage.bind(this);
    this.handleconstant = this.handleconstant.bind(this);
    this.exe = this.exe.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handlebasicSalary(event) {
    this.setState({ basicSalary: event.target.value });
  }

  handletravel(event) {
    this.setState({ travel: event.target.value });
  }

  handlehealth(event) {
    this.setState({ health: event.target.value });
  }

  handlenoPay(event) {
    this.setState({ noPay: event.target.value });
  }

  handleotherDeductions(event) {
    this.setState({ otherDeductions: event.target.value });
  }

  handlesum_of_EPForETF_allowed_earnings(event) {
    this.setState({ sum_of_EPForETF_allowed_earnings: event.target.value });
  }

  handletaxpercentage(event) {
    this.setState({ taxpercentage: event.target.value });
  }

  handleconstant(event) {
    this.setState({ constant: event.target.value });
  }

  exe(event) {
    event.preventDefault();

    const totalEarnings = parseInt(this.state.basicSalary) + parseInt(this.state.travel) + parseInt(this.state.health);
    const grossDeductions = parseInt(this.state.noPay) + parseInt(this.state.otherDeductions);
    const grossEarnings = totalEarnings - grossDeductions;
    const totalEarningsforEPF = parseInt(this.state.basicSalary) + parseInt(this.state.sum_of_EPForETF_allowed_earnings);
    const grossSalaryforEPF = totalEarningsforEPF - grossDeductions;
    const employeeEPF8 = grossSalaryforEPF * 0.08;
    const employerEPF12 = grossSalaryforEPF * 0.12;
    const employerETF3 = grossSalaryforEPF * 0.03;
    const APIT = (grossEarnings * parseInt(this.state.taxpercentage) / 100) - parseInt(this.state.constant);
    const netSalary = grossEarnings - employeeEPF8 - APIT;
    const costtocompany = grossEarnings + employerEPF12 + employerETF3;

    this.setState({
      totalEarnings,
      grossDeductions,
      grossEarnings,
      totalEarningsforEPF,
      grossSalaryforEPF,
      employeeEPF8,
      employerEPF12,
      employerETF3,
      APIT,
      netSalary,
      costtocompany,
    });
  }

  resetForm() {
    this.setState({
      basicSalary: '',
      travel: '',
      health: '',
      noPay: '',
      otherDeductions: '',
      sum_of_EPForETF_allowed_earnings: '',
      taxpercentage: '',
      constant: '',
      totalEarnings: '',
      grossDeductions: '',
      grossEarnings: '',
      totalEarningsforEPF: '',
      grossSalaryforEPF: '',
      employeeEPF8: '',
      employerEPF12: '',
      employerETF3: '',
      APIT: '',
      netSalary: '',
      costtocompany: '',
    });
  }

  render() {
    return (
      <div>
        <h1>Calculate Your Salary</h1>
        <form onSubmit={this.exe}>
          <div>
            Basic Salary
            <input type="text" placeholder="Basic Salary" value={this.state.basicSalary} onChange={this.handlebasicSalary} />
          </div>
          <div>
            Travel
            <input type="text" placeholder="Travel" value={this.state.travel} onChange={this.handletravel} />
          </div>
          <div>
            Health
            <input type="text" placeholder="Health" value={this.state.health} onChange={this.handlehealth} />
          </div>
          <div>
            No Pay
            <input type="text" placeholder="No Pay" value={this.state.noPay} onChange={this.handlenoPay} />
          </div>
          <div>
            Other Deductions
            <input type="text" placeholder="Other Deductions" value={this.state.otherDeductions} onChange={this.handleotherDeductions} />
          </div>
          <div>
            Sum of EPF/ETF Allowed Earnings
            <input type="text" placeholder="Sum of EPF/ETF Allowed Earnings" value={this.state.sum_of_EPForETF_allowed_earnings} onChange={this.handlesum_of_EPForETF_allowed_earnings} />
            <label htmlFor="myCheckbox">EPF</label>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
            <label htmlFor="myCheckbox2">ETF</label>
            <input type="checkbox" id="myCheckbox2" name="myCheckbox2" />
          </div>
          <div>
            Tax Percentage
            <input type="text" placeholder="Tax Percentage" value={this.state.taxpercentage} onChange={this.handletaxpercentage} />
          </div>
          <div>
            Constant, Refer the official document by IRD
            <input type="text" placeholder="Refer the official document by IRD" value={this.state.constant} onChange={this.handleconstant} />
          </div>
          <button type="submit">Calculate</button>
          <button type="button" onClick={this.resetForm} className="reset-button">⟳</button>
        </form>
        <div className="result">
          <div> Total Earnings = {this.state.totalEarnings} </div>
          <div> Gross Deductions = {this.state.grossDeductions} </div>
          <div> Gross Earnings = {this.state.grossEarnings} </div>
          <div> Total Earnings for EPF = {this.state.totalEarningsforEPF} </div>
          <div> Gross Salary for EPF = {this.state.grossSalaryforEPF} </div>
          <div> Employee EPF 8% = {this.state.employeeEPF8} </div>
          <div> Employer EPF 12% = {this.state.employerEPF12} </div>
          <div> Emmployer ETF 3% = {this.state.employerETF3} </div>
          <div> APIT = {this.state.APIT} </div>
          <div> Net Salary = {this.state.netSalary} </div>
          <div> Cost to Company = {this.state.costtocompany} </div>
        </div>
      </div>
    );
  }
}

export default App;
